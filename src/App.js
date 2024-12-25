import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";

const App = () => {
  const [formData, setFormData] = useState({
    row1col1: "GSTIN: ",
    row1col2: "Purchase Order",
    row1col3: "Item 3",
    row2longText:
      "CALIBRECUE IT SOLUTIONS, Balanagar, Tel No: 9618240757, Email: ateeq@calibrecue.com, Website:",
    row3col1: `To\nName: CALIBRECUE,\nAddress: 50037 Hyderabad,\nState Name: JAMMU AND KASHMIR Code: 01,\nGSTIN / UIN :\nPAN / IT No : `,
    row3col2Row1: "Purchase Order No.2",
    row3col2Row2: "Delivery Note:",
    row3col2Row3: "Supplier's Ref.CC//23-24/",
    row3col2Row4: "Your Quotation No.hghhh",
    row3col3Row1: "Purchase Date14-12-2024",
    row3col3Row2: "Mode / Terms Of Payment",
    row3col3Row3: "Other Reference",
    row3col3Row4: "Dated14-12-2024",

    // Adding dynamic keys for Row 4
    row4col1Row1: "",
    row4col1Row2: "",
    row4col1Row3: "",
    row4col1Row4: "",
    row4col1Row5: "",
    row4col1Row6: "",
    row4col1Row7: "",
    row4col1Row8: "",

    row4col2Row1: "",
    row4col2Row2: "",
    row4col2Row3: "",
    row4col2Row4: "",
    row4col2Row5: "",
    row4col2Row6: "",
    row4col2Row7: "",
    row4col2Row8: "",

    row4col3Row1: "",
    row4col3Row2: "",
    row4col3Row3: "",
    row4col3Row4: "",
    row4col3Row5: "",
    row4col3Row6: "",
    row4col3Row7: "",
    row4col3Row8: "",
    // Goods Description Data
    goodsDescription: [
      {
        description: "Machine cutter SPEC DIA 200x200x250",
        brand: "TVS",
        quantity: "1",
        uom: "Nos",
        rate: "500",
        gstPercent: "18",
        amount: "500.00",
        cgst: "0.00",
        sgst: "0.00",
        igst: "90.00",
        total: "590.00",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">React PDF Example</h1>

      {/* PDF Viewer */}
      <PDFViewer className="w-full h-96 mb-8">
        <InvoicePDF formData={formData} />
      </PDFViewer>

      {/* Download PDF Link */}
      <PDFDownloadLink
        document={<InvoicePDF formData={formData} />}
        fileName="invoice_data.pdf"
        className="inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>

      <form className="mt-8">
        {/* Row 1 Inputs */}
        <div className="flex justify-center gap-4 mb-4">
          <input
            type="text"
            name="row1col1"
            value={formData.row1col1}
            onChange={handleChange}
            placeholder="Row 1, Column 1"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="row1col2"
            value={formData.row1col2}
            onChange={handleChange}
            placeholder="Row 1, Column 2"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="row1col3"
            value={formData.row1col3}
            onChange={handleChange}
            placeholder="Row 1, Column 3"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Row 2 Textarea */}
        <div className="flex justify-center mb-4">
          <textarea
            name="row2longText"
            value={formData.row2longText}
            onChange={handleChange}
            placeholder="Long text for Row 2"
            className="w-11/12 p-2 border border-gray-300 rounded-md h-20"
          />
        </div>

        {/* Row 3 Inputs */}
        <div className="flex justify-center gap-4 mb-4">
          {/* Column 1 with 70% width */}
          <input
            type="text"
            name="row3col1"
            value={formData.row3col1}
            onChange={handleChange}
            placeholder="Row 3, Column 1"
            className="w-1/5 p-2 border border-gray-300 rounded-md"
          />

          {/* Column 2 with 4 rows */}
          <div className="w-1/5">
            <input
              type="text"
              name="row3col2Row1"
              value={formData.row3col2Row1}
              onChange={handleChange}
              placeholder="Row 3, Column 2 - Row 1"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="row3col2Row2"
              value={formData.row3col2Row2}
              onChange={handleChange}
              placeholder="Row 3, Column 2 - Row 2"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="row3col2Row3"
              value={formData.row3col2Row3}
              onChange={handleChange}
              placeholder="Row 3, Column 2 - Row 3"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="row3col2Row4"
              value={formData.row3col2Row4}
              onChange={handleChange}
              placeholder="Row 3, Column 2 - Row 4"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Column 3 with 4 rows */}
          <div className="w-1/5">
            <input
              type="text"
              name="row3col3Row1"
              value={formData.row3col3Row1}
              onChange={handleChange}
              placeholder="Row 3, Column 3 - Row 1"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="row3col3Row2"
              value={formData.row3col3Row2}
              onChange={handleChange}
              placeholder="Row 3, Column 3 - Row 2"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="row3col3Row3"
              value={formData.row3col3Row3}
              onChange={handleChange}
              placeholder="Row 3, Column 3 - Row 3"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="row3col3Row4"
              value={formData.row3col3Row4}
              onChange={handleChange}
              placeholder="Row 3, Column 3 - Row 4"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          {/* Column 1 to 6 */}
          {Array.from({ length: 8 }).map((_, colIndex) => (
            <div key={colIndex} className="w-1/6">
              <div className="font-bold text-center mb-2">
                {/* Random text for each column */}
                {colIndex === 0 && "#"}
                {colIndex === 1 && "Description of Goods"}
                {colIndex === 2 && "HSN/SAC"}
                {colIndex === 3 && "Quantity"}
                {colIndex === 4 && "UOM"}
                {colIndex === 5 && "Rate"}
                {colIndex === 6 && "GST %"}
                {colIndex === 7 && "Amount"}
              </div>
              {/* Inputs for rows */}
              {Array.from({ length: 8 }).map((_, rowIndex) => (
                <input
                  key={`row4col${colIndex + 1}Row${rowIndex + 1}`}
                  type="text"
                  name={`row4col${colIndex + 1}Row${rowIndex + 1}`}
                  value={formData[`row4col${colIndex + 1}Row${rowIndex + 1}`]}
                  onChange={handleChange}
                  placeholder={`Row 4, Column ${colIndex + 1} - Row ${
                    rowIndex + 1
                  }`}
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              ))}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;

// IMPORTANT
// rtk query, slicer, reducer, Redux
