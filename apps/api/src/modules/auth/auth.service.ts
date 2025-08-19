import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

@Injectable()
export class AuthService {
	private initialized = false;

	private init() {
		if (this.initialized) return;
		if (!admin.apps.length) {
			admin.initializeApp();
		}
		this.initialized = true;
	}

	async verifyIdToken(idToken: string): Promise<any> {
		this.init();
		return admin.auth().verifyIdToken(idToken);
	}
}