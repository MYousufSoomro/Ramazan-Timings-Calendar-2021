import React from "react";
import Card from "./Card";

function DuaCards() {
  return (
    <center>
      <Card
        CityName="Sehri Dua"
        CityPath="/SehriDua"
        CityTitle="View Sehri Dua"
        CityImage="https://images-na.ssl-images-amazon.com/images/I/71Xe4W56D2L.png"
      />

      <Card
        CityName="Iftar Dua"
        CityPath="/IftarDua"
        CityTitle="View Iftar Dua"
        CityImage="https://imga.apk.tools/img/NlyCfi7PwTgqEqHrhCOTK1uQw_FBUxZnbZj3514wmHjmBdaZT5nBOz75A3pyze6Hkdo=s300"
      />

      <Card
        CityName="Dua-e-Taraweeh"
        CityPath="/TaraweehDua"
        CityTitle="View Dua-e-Taraweeh"
        CityImage="https://apprecs.org/gp/images/app-icons/300/17/com.masnoon.dua.azkar.jpg"
      />
    </center>
  );
}

export default DuaCards;
