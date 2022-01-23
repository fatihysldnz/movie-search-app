# Movie Search Application

Bu proje React.js kullanilarak olusturulmustur.

## Application Ozeti

- Bu app calisitirildiginda ziyaretciyi oncelikle bir **login** ekrani karsilar.

- Bu login ekrani kullanicilarin giris yapabilecegi ve dogru giris bilgileri olan kullanicilarin siteye erisim saglayabilecegi bir kullanici dogrulamasi saglar.

- Kullanicinin dogrulamasi saglanmadigi takrdirde app in herhangi bir sayfasini gormesi mumkun degildir.

- Giris bilgileri dogru olan kullanici api servisinden response olarak donen **"token"** degerini local storagede saklar.

- Application icerisinde her sayfada bu token kontrol edilerek **authentication** saglanir.

- Daha sonrasinda giris yapan kullaniciyi anasayfa niteliginde film cardlari ve arama ekrani bulunan bir sayfa karsilar.

- Bu sayfada kullanicilar cesitli film aramalari yapabilirler.

- Ayrica hem sayfa ilk yuklendiginde gelen filmlerden hem de arama sonucu gelen filmlerden herhangi birine tiklamalari durumunda O film icin detail sayfasina yonlendirilirler.

- Son olarak da kullancilara **logout** butonu sunulmustur. Bu butona tiklandiginda kullaniciya cikis yapmak isteyip istemedigi sorulur ve onay alinirsa kullaniciyi login sayfasina yonlendirip, LocalStorage de tutulan kullanici tokeni silinir.

### `react-router-dom`
