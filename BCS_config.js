
const config = {
    style: "mapbox://styles/jbamford/cl7ylpomb007715qotuwdm3gy",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "https://docs.google.com/spreadsheets/d/1U6ZTiTxWvtS64N9XGaIW2uj9p_Hl7nhnAckcR-pJNmc/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-6.438,55.233], //Lng, Lat
    zoom: 12.7, //Default zoom
    pitch: 5,
   
    title: "",
    sideBarInfo: ["Title/Name", "Theme"],
    popupInfo: ["Title/Name",],
    filters: [
        
        {
            type: "checkbox",
            title: "Themes: ",
            columnHeader: "Theme",
            listItems: ["Volunteer Survey Data", "Historic Environment Projects", "NI Sites and Monuments Record"]
        }
    ]

};
