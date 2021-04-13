import React from "react";
import Card from "./Card";
import Swal from 'sweetalert2';

function SwAlert(dua){
  let temp = dua;
  if (temp === "dua1"){
    Swal.fire({
      title: 'وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ',
      text: '"اورمیں نے ماہ رمضان کے کل کے روزے کی نیت کی"',
      icon: 'info',
      showCloseButton: true
    })
  } else if (temp === "dua2"){
    Swal.fire({
      title: 'اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ',
      text: '"اے اللہ!میں نے تیری خاطر روزہ رکھا اور تیرے اوپر ایمان لایا اور تجھ پر بھروسہ کیا اورتیرے رزق سے اسے کھول رہا ہوں۔"',
      icon: 'info',
      showCloseButton: true
    })
  } else if (temp === "dua3"){
    Swal.fire({
      title: 'سُبْحَانَ ذِی الْمُلْکِ وَالْمَلَکُوْتِ ط سُبْحَانَ ذِی الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْکِبْرِيَآئِ وَالْجَبَرُوْتِ ط سُبْحَانَ الْمَلِکِ الْحَيِ الَّذِی لَا يَنَامُ وَلَا يَمُوْتُ سُبُّوحٌ قُدُّوْسٌ رَبُّنَا وَرَبُّ الْمَلَائِکَةِ وَالرُّوْحِ ط اَللّٰهُمَّ اَجِرْنَا مِنَ النَّارِ يَا مُجِيْرُ يَا مُجِيْرُ يَا مُجِيْر۔',
      text: 'پاک ہے (وہ اﷲ) زمین و آسمان کی بادشاہی والا۔ پاک ہے (وہ اﷲ) عزت و بزرگی، ہیبت و قدرت اور عظمت و رُعب والا۔ پاک ہے بادشاہ (حقیقی، جو) زندہ ہے، سوتا نہیں اور نہ مرے گا۔ بہت ہی پاک (اور) بہت ہی مقدس ہے ہمارا پروردگار اور فرشتوں اور روح کا پروردگار۔ اِلٰہی ہم کو دوزخ سے پناہ دے۔ اے پناہ دینے والے! اے پناہ دینے والے! اے پناہ دینے والے!',
      icon: 'info',
      showCloseButton: true
    })
  }

}

function DuaCards() {
  return (
    <center>
      <Card
        CityName="Sehri Dua"
        CityTitle="View Sehri Dua"
        CityImage="https://images-na.ssl-images-amazon.com/images/I/71Xe4W56D2L.png"
        onClick={()=>SwAlert("dua1")}
      />

      <Card
        CityName="Iftar Dua"
        CityTitle="View Iftar Dua"
        CityImage="https://imga.apk.tools/img/NlyCfi7PwTgqEqHrhCOTK1uQw_FBUxZnbZj3514wmHjmBdaZT5nBOz75A3pyze6Hkdo=s300"
        onClick={()=>SwAlert("dua2")}
      />

      <Card
        CityName="Dua-e-Taraweeh"
        CityTitle="View Dua-e-Taraweeh"
        CityImage="https://apprecs.org/gp/images/app-icons/300/17/com.masnoon.dua.azkar.jpg"
        onClick={()=>SwAlert("dua3")}
      />
    </center>
  );
}

export default DuaCards;
