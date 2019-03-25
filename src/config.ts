// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
   logging: true,

   intentMap: {
      'AMAZON.StopIntent': 'END',
   },
   i18n: {
    returnNull: false,
    fallbackLng: 'en-GB',
},
   cms: {
    GoogleSheetsCMS: {
        spreadsheetId: '1r-97hsRxQfKBY9nUIGStNJISWSylFCp_pfdszsZbCMs',
        credentialsFile:'./credentials/credentials.json',
        access: 'private',
        sheets: [
            {
                name: 'intro',
                type: 'Responses',
                position:1
            },
        ]
    }
},
   db: {
        FileDb: {
            pathToFile: '../db/db.json',
        }
    },
};
