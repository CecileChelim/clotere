export function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
    const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
    const data = [];        // Initialize an array to store the parsed data
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}