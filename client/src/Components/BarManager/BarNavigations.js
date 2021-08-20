import NavigationModel from "../../models/NavigationModel";
export default function BarNavigations(){
    let navigations = new NavigationModel();
    navigations.addSection("NAVIGATIONS");
    navigations.addNavigationWitIcon("NAVIGATIONS","Something","/bar","icon-home");
    navigations.addNavigationWitIcon("NAVIGATIONS","To B","/bar","icon-file-text");
    navigations.addNavigationWitIcon("NAVIGATIONS","ABC","/bar", "icon-server");
    navigations.addNavigationWitIcon("NAVIGATIONS","DEF","/bar","icon-file-text");
    //navigations.addSection("Account");
    //navigations.addNavigationWitIcon("Account","Profile","/","icon-sidebar");
    //navigations.addNavigationWitIcon("Account","Logout","/","icon-power");
    return navigations;
}