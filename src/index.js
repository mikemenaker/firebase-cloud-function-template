import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import cors from 'cors';

import { doWork } from './worker';

admin.initializeApp(functions.config().firebase);

export let testEndpoint = functions.https.onRequest(async (req, res) => {
    cors()(req, res, async () => {
        try {
            const tokenId = req.get('Authorization').split('Bearer ')[1];
            await admin.auth().verifyIdToken(tokenId);
        } catch (err) {
            res.status(401).send(err);
        }

        await doWork();

        res.sendStatus(200);
    });
});