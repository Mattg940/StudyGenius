import { Body, Controller, Post } from '@nestjs/common';

@Controller('billing')
export class BillingController {
	@Post('create-checkout')
	async createCheckout(@Body() body: { planId: string }) {
		return { ok: true, data: { checkoutUrl: 'https://checkout.stripe.com/pay/cs_test_123', planId: body.planId } };
	}
}