
const config = {
    style: "mapbox://styles/jbamford/cm335hqg4010l01o015fb9dr7",
    accessToken: "pk.eyJ1IjoiamJhbWZvcmQiLCJhIjoia0dZNENUMCJ9._cSAJxiTZhfdH6F1LhxnVw",
    CSV: "BCS.csv",
    center: [-6.877, 55.134], //Lng, Lat
    zoom: 11.40, //Default zoom
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
