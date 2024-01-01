type pirateObject = {
  captainName: string;
  swordsman: string;
  navigator: string;
  cook: string;
  sniper: string;
  doctor: string;
  shipwright: string;
  musician: string;
  archeologist?: string; //it is optional
};

interface NewObj extends pirateObject {
  henchmen: string;
}

const strawhatObject: NewObj = {
  captainName: "Monkey.D.Luffy",
  swordsman: "Roronoa Zoro",
  navigator: "Cat Bugler Nami",
  cook: "Vinesmoke Sanji",
  sniper: "God Ussop",
  doctor: "Chooper",
  shipwright: "Franky",
  musician: "Brook",
  henchmen: "Jimbei",
};
