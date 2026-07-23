/**
 * Amica Digital — booking endpoint.
 *
 * Receives a booking from the website, appends it as a row to the marketing
 * team's Google Sheet, emails the team, and sends the client a confirmation.
 *
 * SETUP (10 minutes, one time)
 * ---------------------------------------------------------------------------
 * 1. Create a Google Sheet named e.g. "Amica — Bookings".
 * 2. In that Sheet: Extensions → Apps Script. Delete the placeholder code and
 *    paste this whole file in.
 * 3. Edit TEAM_EMAILS below.
 * 4. Deploy → New deployment → type "Web app":
 *       Execute as:        Me
 *       Who has access:    Anyone            <-- important, must be "Anyone"
 *    Copy the /exec URL it gives you.
 * 5. In the website project, create a file called `.env` next to package.json:
 *       VITE_BOOKING_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
 *    Then rebuild/redeploy the site.
 *
 * After any edit here you must Deploy → Manage deployments → Edit → Version:
 * "New version" → Deploy, otherwise the live URL keeps running the old code.
 */

// Who gets notified when a booking comes in. Comma-separated.
var TEAM_EMAILS = 'growth@amica.digital';

// Sheet tab that stores the bookings. Created automatically if missing.
var SHEET_NAME = 'Bookings';

var HEADERS = [
  'Received At',
  'Reference',
  'Meeting Time (UK)',
  'Meeting Time (Client)',
  'Client Timezone',
  'Duration',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Company',
  'Service Interest',
  'Message',
  'CTA Source',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'gclid',
  'Referrer',
  'Page URL',
  'Status',
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Reject obvious junk before it reaches the team.
    if (!data.email || !data.firstName || !data.startsAt) {
      return json({ status: 'error', message: 'Missing required fields' });
    }

    var sheet = getSheet();
    var start = new Date(data.startsAt);

    sheet.appendRow([
      new Date(),
      data.reference || '',
      Utilities.formatDate(start, 'Europe/London', 'EEE d MMM yyyy, HH:mm') + ' UK',
      data.slotLabel || '',
      data.visitorTimeZone || '',
      (data.durationMins || 20) + ' min',
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.service || '',
      data.message || '',
      data.source || '',
      data.utm_source || '',
      data.utm_medium || '',
      data.utm_campaign || '',
      data.gclid || '',
      data.referrer || '',
      data.pageUrl || '',
      'New',
    ]);

    notifyTeam(data, start);
    confirmToClient(data, start);

    return json({ status: 'ok', reference: data.reference });
  } catch (err) {
    return json({ status: 'error', message: String(err) });
  }
}

// Lets you open the /exec URL in a browser to check the deployment is live.
function doGet() {
  return json({ status: 'ok', service: 'Amica booking endpoint' });
}

// --- helpers ---------------------------------------------------------------

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#0f2350')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notifyTeam(data, start) {
  var when = Utilities.formatDate(start, 'Europe/London', 'EEEE d MMMM yyyy, HH:mm') + ' (UK time)';
  var name = data.firstName + ' ' + data.lastName;

  var body =
    'New consultation booked via the website.\n\n' +
    'WHEN:        ' + when + '\n' +
    'CLIENT TIME: ' + (data.slotLabel || '-') + ' (' + (data.visitorTimeZone || '-') + ')\n' +
    'REFERENCE:   ' + (data.reference || '-') + '\n\n' +
    'NAME:        ' + name + '\n' +
    'EMAIL:       ' + data.email + '\n' +
    'PHONE:       ' + data.phone + '\n' +
    'COMPANY:     ' + (data.company || '-') + '\n' +
    'SERVICE:     ' + (data.service || '-') + '\n\n' +
    'MESSAGE:\n' + (data.message || '-') + '\n\n' +
    '--- attribution ---\n' +
    'CTA:         ' + (data.source || '-') + '\n' +
    'Campaign:    ' + (data.utm_campaign || '-') + ' / ' + (data.utm_source || '-') + '\n' +
    'Referrer:    ' + (data.referrer || '-') + '\n\n' +
    'Send the calendar invite to confirm the slot.';

  MailApp.sendEmail({
    to: TEAM_EMAILS,
    subject: '🗓️ New booking — ' + name + ' — ' + when,
    body: body,
    replyTo: data.email,
  });
}

function confirmToClient(data, start) {
  var body =
    'Hi ' + data.firstName + ',\n\n' +
    'Thanks for booking a consultation with Amica Digital.\n\n' +
    'Your slot: ' + (data.slotLabel || '') + '\n' +
    'Duration:  ' + (data.durationMins || 20) + ' minutes\n' +
    'Reference: ' + (data.reference || '') + '\n\n' +
    'A calendar invite with the meeting link will follow shortly. If you need to ' +
    'move the call, just reply to this email.\n\n' +
    'Speak soon,\n' +
    'Amica Digital Services\n' +
    'growth@amica.digital · +44 7446 981768';

  MailApp.sendEmail({
    to: data.email,
    subject: 'Your consultation with Amica Digital is booked',
    body: body,
    name: 'Amica Digital Services',
    replyTo: TEAM_EMAILS.split(',')[0].trim(),
  });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
