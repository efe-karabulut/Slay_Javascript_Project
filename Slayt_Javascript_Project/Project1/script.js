/*
1. Kullanıcıdan ay girmesini isteyin ve o ayın hangi mevsime ait olduğunu belirleyin. Örneğin, kullanıcı nisan yazarsa alert ile İlkbahar yazdırın. Mantıksal ifadeleri kullanarak her mevsim için gerekli koşulları kontrol edin.
*/    
// let ay = prompt("Hangi ay'ı girmek istersiniz?")

// ay = ay.toLowerCase();

// if (ay == "aralık" || ay == "ocak" || ay == "şubat") {
//     alert("Şuan kış mevsimindesiniz")
// } else if (ay == "mart" || ay == "nisan" || ay == "mayıs") {
//     alert("Şuan İlkbahar mevsimindesiniz.")
// } else if (ay == "haziran" || ay == "temmuz" || ay == "ağustos") {
//     alert("Şuan yaz mevsimindesiniz.")
// } else if (ay == "kasım" || ay == "ekim" || ay == "kasım"){
//     alert("Şuan yaz mevsimindesiniz")
// } else {
//     alert("lütfen geçerli bir ay girdiğinizden emin olun!")
// }    









// 2. Tek / Çift Sayı Kontrolü: Kullanıcıdan bir sayı girmesini isteyin ve bu sayının tek mi yoksa çift mi olduğunu kontrol edin.

// let sayi = prompt("Lütfen bir sayı giriniz.")
// if (sayi%2 == 0) {
//     alert ("Bu sayı çift sayıdır.")
// } else {
//     alert ("Bu sayı tek sayıdır")
// }








// 3. Kullanıcıdan ad, yaş isteyin ad 3 karakterden az olmamalı, yaş ise negatif değerler, geçersiz bir sayı veya 0 ile 5 arası olmamalıdır. 

    // let ad = prompt("Adınız?")
    // if (ad.length < 3) {
    //   alert("Adınız 3 karakterden küçük olamaz.")
    // } else {
    //   let yas = prompt("Yaşınız?: not:")
    //   if (yas < 0 || isNaN(yas) || yas == 0 || yas <=5) {
    //     alert("0-5 arası olamaz, karakter ve negatif değerler içeremez")
    //   } else {
    //     alert("Başarılı bir şekilde kayıt oldunuz.")
    //   }
    // } 
    








// 4. Kullanıcıdan iki sayı girmesini isteyin ve bu iki sayının karşılaştırmasını yapın. Hangi sayının daha büyük veya küçük olduğunu veya eşit olduğunu kontrol edin ve sonucu ekrana yazdırın

// let birinci_sayi = prompt("1. sayıyı giriniz")
// if (isNaN(birinci_sayi)) {
//   alert("lütfen doğru bir sayı giriniz")
// } else {
//   let ikinci_sayi = prompt("2. sayıyı giriniz")
//   if (isNaN(ikinci_sayi)) {
//     alert("lütfen doğru bir sayı giriniz")
//   } else {
//     if (birinci_sayi > ikinci_sayi) {
//       alert("1. sayı 2. sayıdan büyüktür")
//     } else if (birinci_sayi < ikinci_sayi) {
//       alert("2. sayı 1. sayıdan büyüktür")
//     } else if (birinci_sayi == ikinci_sayi) {
//       alert("1. sayı 2. sayı ile eşittir")
//     }
//   }
// }








// 5. Kullanıcı panele girebilmek için isminin ayrılmış olması gerekmektedir, siteye giren kullanıcı ismini yazmalı ve eğer yazdığı isim rezervasyon (array / dizi) içinde yer alıyorsa siteye girsin aksi halde hata mesajı verdirin.

  // const rezervasyon = ["efe","murat","ahmet","gökhan","burçin","öykü"]
  // let kullanici = prompt("Lütfen adınızı giriniz")
  // kullanici = kullanici.toLowerCase();
  // if (!isNaN(kullanici)) {
  //   alert("lütfen bir isim giriniz.")
  // } else {
  //   if (rezervasyon.includes(kullanici)) {
  //     alert("Hoşgeldiniz.")
  //   } else {
  //     alert("Rezervasyonunuz bulunmamaktadır.")
  //   }
  // }








// 6. 
// let kazanc = 50; 
// let gun = "pazartesi";
// haftaici olan günlerde kazanc 50, cuma günleri 60 ve haftasonu ise kazanc 100 eklenecek şekilde ayarlanmalıdır. İlgili kodu yazınız. 

// const haftaici = ["pazartesi","salı","çarşamba","perşembe"]
// const cuma = ["cuma"]
// const haftasonu = ["cumartesi","pazar"]
// let para = 50
// alert ("bakiyeniz: " + para)
// let gun = prompt("Hangi Gündesiniz ?")
// gun = gun.toLowerCase()
// if (!isNaN(gun) || gun == "") {
//   alert("lütfen haftanın bir gününü giriniz")
// } else {
//   if (haftaici.includes(gun)) {
//     alert(`Güncel bakiyeniz ${para += 50}`)
//   } else if (cuma.includes(gun)) {
//     alert(`Güncel bakiyeniz: ${para += 60}`)
//   } else if (haftasonu.includes(gun)) {
//     alert (`Güncel bakiyeniz: ${para += 100}`)
//   } else {
//     alert("lütfen haftanın bir gününü giriniz")
//   }
// }










// 7. 
// const tarayicilar = [
//  { name: "Google Chrome:", support: true},
//  { name: "Mozilla:", support: true},
//  { name: "Opera:", support: true},
//  { name: "Internet Explorer:", support: false}
// ]
// yukaridaki listeden bir tarayıcı seçin ve eğer support true ise siteye erişim sağlansın, aksi halde tarayıcının ismini yazdırarak "x tarayıcısı bu sitenin işlevlerini desteklemiyor." çıktısını kullanıcıya gönderin.

// const tarayicilar = [
//  { name: "google", support: true},
//  { name: "mozilla", support: true},
//  { name: "opera", support: true},
//  { name: "internet explorer", support: false}
// ]
// alert ("Kullanmak istediğiniz web sitesinin numarasını giriniz.")
// let sayi = prompt("Google = 1, Mozilla = 2, Opera = 3, İnternet Explorer = 4")
// if (isNaN(sayi) || sayi == 0 || sayi > 4 || sayi < 0) {
//   alert('Lütfen bir geçerli bir sayı giriniz.')
// } else {
//   if (sayi == 1 && tarayicilar[0].support == true) {
//     alert("Google a hoşgeldiniz.")

// } else if (sayi == 2 && tarayicilar[1].support == true) {
//     alert("Mozilla ya hoşgeldiniz")
//   } else if (sayi == 3 && tarayicilar[2].support == true) {
//     alert("Opera ya hoşgeldiniz")
//   } else if (sayi == 4 && tarayicilar[3].support == true) {
//     alert ("İnternet Explorer a hoşgeldiniz")
//   } else {
//     alert(`Üzgünüm bu tarayıcı ${tarayicilar[3].name} desteklememektedir.`)
//   }
// }
