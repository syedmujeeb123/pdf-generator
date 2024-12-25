import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  column: {
    width: "33.33%",
    padding: 5,
    border: "1px solid #000",
    textAlign: "center",
  },
  longTextColumn: {
    width: "100%",
    padding: 5,
    border: "1px solid #000",
    textAlign: "center",
  },
  columnContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "33.33%",
    border: "1px solid #000",
    textAlign: "center",
  },
  columnItem: {
    borderTopWidth: 1, // Adds top border
    borderBottomWidth: 1, // Adds bottom border
    borderColor: "#000", // Border color
    padding: 8, // Space within each row
  },
  cell: {
    flex: 1,
    border: "1px solid #000",
    padding: 5,
    textAlign: "center",
  },
  smallCell: {
    flex: 0.5, // Smaller width for the # column
    border: "1px solid #000",
    padding: 5,
    textAlign: "center",
  },
  bigCell: {
    flex: 2, // Bigger width for the Description of Goods column
    border: "1px solid #000",
    padding: 5,
    textAlign: "center",
  },
  biggerCell: {
    flex: 1.5, // Medium width for the 3rd (HSN/SAC) and 4th (Quantity) columns
    border: "1px solid #000",
    padding: 5,
    textAlign: "center",
  },
  row4: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
});

const InvoicePDF = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      {/* Row 1 */}
      <View style={styles.row}>
        <Text style={[styles.column, { textAlign: "left" }]}>
          {formData.row1col1}
        </Text>
        <Text style={styles.column}>{formData.row1col2}</Text>
        <Text style={styles.column}>{formData.row1col3}</Text>
      </View>

      {/* Row 2 (Long Text) */}
      <View style={styles.row}>
        <Text style={[styles.longTextColumn, { padding: "30px" }]}>
          {formData.row2longText}
        </Text>
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        {/* Column 1 with 70% width */}
        <Text
          style={[
            styles.column,
            { width: "70%", padding: 10, textAlign: "left" },
          ]}
        >
          {formData.row3col1}
        </Text>

        {/* Container for Column 2 and Column 3 */}
        <View style={{ flex: 1 }}>
          {/* Row containing Column 2 and Column 3 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "13px",
            }}
          >
            {/* Column 2 with 4 rows */}
            <View style={[styles.columnContent, { flex: 1 }]}>
              <Text style={styles.columnItem}>{formData.row3col2Row1}</Text>
              <Text style={styles.columnItem}>{formData.row3col2Row2}</Text>
              <Text style={styles.columnItem}>{formData.row3col2Row3}</Text>
              <Text style={styles.columnItem}>{formData.row3col2Row4}</Text>
            </View>

            {/* Column 3 with 4 rows */}
            <View style={[styles.columnContent, { flex: 1 }]}>
              <Text style={styles.columnItem}>{formData.row3col3Row1}</Text>
              <Text style={styles.columnItem}>{formData.row3col3Row2}</Text>
              <Text style={styles.columnItem}>{formData.row3col3Row3}</Text>
              <Text style={styles.columnItem}>{formData.row3col3Row4}</Text>
            </View>
          </View>

          {/* New View below both columns */}
          <View
            style={{
              borderWidth: 1,
              padding: 8,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Terms of Delivery:
            </Text>
          </View>
        </View>
      </View>

      {/* Row 4 Display */}
      <View style={styles.row4}>
        {Array.from({ length: 8 }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {/* Add the names as the headings of each column only in the first row */}
            {rowIndex === 0 ? (
              <>
                <Text style={styles.smallCell}>#</Text>
                <Text style={styles.bigCell}>Description of Goods</Text>
                <Text style={styles.biggerCell}>HSN/SAC</Text>
                <Text style={styles.biggerCell}>Quantity</Text>
                <Text style={styles.cell}>UOM</Text>
                <Text style={styles.cell}>Rate</Text>
                <Text style={styles.cell}>GST %</Text>
                <Text style={styles.cell}>Amount</Text>
              </>
            ) : (
              <>
                {/* Display form data for other rows */}
                <Text style={styles.smallCell}>
                  {formData[`row4col1Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.bigCell}>
                  {formData[`row4col2Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.biggerCell}>
                  {formData[`row4col3Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.biggerCell}>
                  {formData[`row4col4Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.cell}>
                  {formData[`row4col5Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.cell}>
                  {formData[`row4col6Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.cell}>
                  {formData[`row4col7Row${rowIndex}`] || "-"}
                </Text>
                <Text style={styles.cell}>
                  {formData[`row4col8Row${rowIndex}`] || "-"}
                </Text>
              </>
            )}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
