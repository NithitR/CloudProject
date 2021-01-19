function initMap() {
    var options = {
        url: "https://us-east-1.quicksight.aws.amazon.com/embed/592958dde1da4c6cb6a28ca06fb175e3/dashboards/2591169b-2392-41aa-b914-89b3329a422a?isauthcode=true&identityprovider=quicksight&code=AYABeFPJraCRCmA0fJSQWdpIKFQAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4ZGLViwIvMWeq0eg2SdOyWJS86qkEBfgLEiY79AhlHtMBtC7LvN1cg4m2fkRa4mdR7QAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDM7ceA4rsgn5kKKPsgIBEIA75Y_wzSfrLiApngmexrPmldtkETCKsDseDyumcmRzRuOT6hdjYk7hK1_xRbz3Hdg-VAVfkRzxOpANyHQCAAAAAAwAABAAAAAAAAAAAAAAAAAAateFSPw42st_5Y2huXwwa_____8AAAABAAAAAAAAAAAAAAABAAAAm9fe4uBJNA6R9aBy3dd3w98rFEgosOJUNsSO5iSx2sCihX7XaRoy-ftNKMi2HdjmQrk7BSJ7zYc6rP-LCs-hIghUIRT-HKsC0WD192b_i1FnYntCY0P0oxNegLVMvg8HHwScj5Tm68Eiij2qqe495qhAndmYtanQEKXO3e2PrjRSP3X7OVU1gf-uG9NwzgagznD4P3FfzDVNDm-F3R55yUH9ey5nMcRxSe4w3w%3D%3D",
        container: document.getElementById("embeddingContainer"),
        parameters: {
            country: "United States",
            states: [
                "California",
                "Washington"
            ]
        },
        scrolling: "no",
        height: "700px",
        width: "1000px",
        locale: "en-US",
        footerPaddingEnabled: true,
        sheetTabsDisabled: false, // use this option to enable or disable sheet tab controls in dashboard embedding
        printEnabled: false, // use this option to enable or disable print option for dashboard embedding
         // this option only applies to experience embedding and will not be used for dashboard embedding
    };
    var dashboard = QuickSightEmbedding.embedDashboard(options);
    dashboard.on("load", xx);

}
$( document ).ready(function() {
    // Handler for .ready() called.

});
function xx(){
    console.log("xxxx");
}

