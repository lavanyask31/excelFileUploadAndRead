// if (e.target.files) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     const data = e.target.result;
    //     const workbook = xlsx.read(data, { type: "array" });
    //     const sheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[sheetName];
    //     const json = xlsx.utils.sheet_to_json(worksheet);
    //     console.log(json);
    //   };
    //   reader.readAsArrayBuffer(e.target.files[0]);
    // }

    //*************** */
    // let excelToJson = function () {
    //   this.parseExcel = (file) => {
    //     let reader = new FileReader();
    //     reader.onload = function (e) {
    //       const data = e.target.result;
    //       var workbook = xlsx.read(data, {
    //         type: "binary",
    //       });
    //       workbook.SheetNames.forEach(function (sheetName) {
    //         // Here is your object
    //         var XL_row_object = XLSX.utils.sheet_to_row_object_array(
    //           workbook.Sheets[sheetName]
    //         );
    //         var json_object = JSON.stringify(XL_row_object);
    //         console.log(JSON.parse(json_object));
    //       });
    //     };
    //     reader.noerror = (err) => {
    //       console.log("err", err);
    //     };
    //     reader.readAsBinaryString(file);
    //   };
    // };
    // var xl2json = new excelToJson();
    // xl2json.parseExcel(files[0]); // expecting only one file
    // console.log("files", files);
