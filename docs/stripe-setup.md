# Stripe setup — monthly plans (Payment Links)

This site takes payments with **Stripe Payment Links**: a hosted checkout page
Stripe creates for you. No backend, no secret keys in the site, nothing to
maintain. You create one link per plan in the Stripe dashboard and paste it into
the code.

The four Pricing plans map to four links:

| Plan | Price |
|---|---|
| Starter | £25 / month |
| Foundation | £50 / month |
| Growth | £75 / month |
| Pro | £100 / month |

---

## 1. Create and activate your Stripe account

1. Go to <https://dashboard.stripe.com/register> and sign up.
2. Complete **Activate account**: business details, and a UK **bank account**
   so Stripe can pay out to you.
3. Set the account currency / country to **United Kingdom (GBP)**.

You can build the links in **Test mode** first (toggle top-right of the
dashboard) and switch to live later — see step 6.

## 2. Create a product for each plan

Dashboard → **Product catalog** → **+ Add product**. For Starter:

- **Name:** `Starter — AI Growth Plan`
- **Pricing model:** Recurring
- **Price:** `25.00`  · **Currency:** GBP · **Billing period:** Monthly
- Save.

Repeat for **Foundation (£50)**, **Growth (£75)** and **Pro (£100)**.

## 3. Create a Payment Link for each plan

Dashboard → **Payment links** → **+ Create payment link**.

1. **Product:** select `Starter — AI Growth Plan` (the £25/mo price).
2. Under **Options**:
   - Turn on **Allow promotion codes** if you want to run discounts.
   - **After payment → Redirect customers to a URL** →
     `https://amicadigitalservices.com/?checkout=success` (or a dedicated
     thank-you page). Stripe emails the receipt automatically.
   - Optionally collect **billing address** / **phone**.
3. **Create link.** Copy the URL — it looks like
   `https://buy.stripe.com/8x2aEQ...`.

Repeat for Foundation, Growth and Pro.

## 4. Paste the links into the site

Open [src/data/site.js](../src/data/site.js), find `pricingPlans`, and set
`checkoutUrl` on each plan:

```js
{
  name: 'Starter',
  // …
  cta: 'Start Small',
  checkoutUrl: 'https://buy.stripe.com/8x2aEQ...',   // ← paste here
},
```

That's it. The Pricing button now sends the customer straight to Stripe
checkout. **While `checkoutUrl` is empty, the button opens the booking modal
instead**, so the page keeps working until every link is in.

Rebuild / redeploy the site after editing (`npm run build`).

## 5. Test it

In **Test mode**, open the site, click a plan, and pay with Stripe's test card:

```
Card:  4242 4242 4242 4242
Expiry: any future date    CVC: any 3 digits    Postcode: any
```

Check the payment appears in Dashboard → **Payments**, and that the subscription
shows in **Subscriptions**.

## 6. Go live

1. Flip the dashboard to **Live mode** (top-right toggle).
2. **Recreate the products and payment links in live mode** — test-mode links do
   **not** work live, and the live URL is different.
3. Replace each `checkoutUrl` in `site.js` with the **live** `buy.stripe.com`
   URL, and redeploy.

## 7. Let customers manage their subscription (recommended)

Dashboard → **Settings → Billing → Customer portal** → enable it. Customers can
then update their card or cancel from a Stripe-hosted page. Add a link to it
(e.g. in the footer or a "Manage subscription" email) — Stripe gives you the
portal URL.

---

### Good to know

- **Fees:** roughly **1.5% + 20p** per UK card, ~**2.5% + 20p** for
  international cards. No monthly fee.
- **Receipts & renewals** are automatic — Stripe emails the customer and retries
  failed renewal payments.
- **Refunds / cancellations** are done from the Stripe dashboard.
- Payment Link URLs are **safe to be public** — they contain no secret. The only
  secret (your API key) never touches this site, which is why this approach needs
  no backend.
- If you later want coupons at checkout, in-app upgrades, or to charge the
  one-time **web projects**, that's when a small serverless Checkout endpoint
  becomes worth it — ask and we can add it.
