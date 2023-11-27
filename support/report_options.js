const REPORT_PATH = './Reports/';
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./config/appConfig.properties');

let options = {

    jsonDir: REPORT_PATH + "cucumber/",
    reportPath: REPORT_PATH + "report/",
    displayDuration: true,
    disableLog: true,
    pageFooter: " ",
    pageTitle: "Chat GPT Automation Report",
    reportName: "Automation Report",

    customData: {
        title: 'Project Specifications',
        data: [
            { label: 'Project', value: 'Chat GPT' },
            { label: 'Release', value: properties.get("branch_name") },
            { label: 'Purpose', value: 'Regression Suite UI verification' },
            { label: 'Instance', value: properties.get('BASE_URL') },
            { label: 'Date', value: new Date().toLocaleString() },
        ]
    }
}

module.exports = {
    options: options
}