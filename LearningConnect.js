const TITLE = "PC 講習"
const GUEST_GMAIL = "GMAIL_ADDRESS"
const YEAR = 2024
const MONTH = 2
const DAY = 16
const HOUR = 13
const MINUTE = 0
const PAID_TIME = 8
const SHEET_URL = "SHEET URL"

function createEvent2Hours() {

  const startTime = new Date(YEAR, MONTH - 1, DAY, HOUR, MINUTE, 0);
  const endTime = new Date(startTime.getTime());
  endTime.setHours(startTime.getHours() + 2);

  console.log(startTime, endTime)
  const calendar = CalendarApp.getDefaultCalendar();

  const event = calendar.createEvent(title, startTime, endTime);
  event.addGuest(GUEST);
}

function sendGmailAfterCourse() {
  const startTime = new Date(YEAR, MONTH - 1, DAY, HOUR, MINUTE, 0);
  const cource = ["Snnipet Tool","iPhone","アプリ"];
  const subject = startTime.getFullYear() + "/" + (startTime.getMonth() + 1) + "/" + startTime.getDate() + " " +TITLE;
  const body = `
  ${GUEST_NAME}さん

  お疲れ様です。${ME} です。
  本日はご対応いただきありがとうございました。

  本日は以下を実行しました。
`

  const addCource = body + cource.reduce((acc,cur) => "- " + cur + "\n" + acc, "");

  const addSheetAndSigneture = addCource + `

${SHEET_URL}

以上です。

${ME}
`

  const main = MailApp.sendEmail(GUEST_GMAIL, subject, body);

}

function addCourceConetentsToSS() {
  const startTime = new Date(YEAR, MONTH - 1, DAY, HOUR, MINUTE, 0);
  const cource = ["Snnipet Tool","iPhone","ディープラーニング"];
  const ss = SpreadsheetApp.openByUrl(SHEET_URL);
  const sheet = ss.getSheetByName("History");

  let i = sheet.getDataRange().getLastRow() + 1;
  for (courceItem of cource) {
    console.log(courceItem)
    sheet.getRange("A" + i).setValue(startTime);
    sheet.getRange("B" + i).setValue(courceItem);
    i++;
  }
}  
