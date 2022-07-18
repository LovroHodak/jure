import React from "react";
import { tw } from "../tailwind";

export default function PogojiPoslovanja() {
  return (
    <div className="bg-white p-10 md:p-20 border-b-4 border-black">
      <div>
        <Title>Pogoji poslovanja</Title>
        <Text>
          Pogoji poslovanja spletne trgovine so sestavljeni v skladu z Zakonom o
          varstvu potrošnikov (ZVPot-UPB2), Zakonom o varstvu osebnih podatkov
          (ZVOP-1) in Zakonom o izvensodnem reševanju potrošniških sporov
          (ZIsRPS).
        </Text>
        <Text>
          Lastnik in upravljalec spletne strani www.bratinovgin.com (v
          nadaljevanju “spletna stran”) in spletne trgovine (v nadaljevanju
          “trgovina”) je podjetje Bratinov d.o.o., s sedežem podjetja: Cesta 5.
          Maja 5, 5270 Ajdovščina. (v nadaljevanju “podjetje” in “ponudnik”)
          Podjetje je vpisano v sodni register okrožnega sodišča v Novi Gorici.
          Matična številka: 8119805000. Podjetje je zavezanec za plačilo DDV (ID
          za DDV: SI35051655).
        </Text>
        <Text>
          Splošni pogoji urejajo odnos med podjetjem in kupci ter uporabniki
          spletne strani. Kupec je s splošnimi pogoji uporabe seznanjen ob
          oddaji naročila. Z nakupom potrdi seznanjenost z njimi.
        </Text>
        <Text>
          Vprašanja glede naših pogojev poslovanja nam lahko posredujete na:
          info@bratinovgin.com
        </Text>
      </div>
      <div>
        <Title>Naročila</Title>
        <Text>
          Nakup lahko na spletni strani opravite brez prijave oz. registracije.
          Izdelke z izbiro gumba “V KOŠARICO” kupec doda v košarico. Količina
          izdelkov v košarici je prikazana na vrhu strani s številko v oklepaju.
        </Text>
        <Text>
          Ko je izdelek uspešno dodan v košarico se na gumbu “V KOŠARICO”
          dodatno izriše potrditvena kljukica, pod gumbom pa se pojavi napis:
          “Prikaži košarico”. S klikom na ta napis ali na napis “Košarica” ali
          na ikono se kupcu prikaže vsebina košarice.
        </Text>
        <Text>
          V košarici so na stopnji 1 (Pregled) prikazani vsi izbrani izdelki,
          količina, ki se lahko poljubno spreminja ter cena, ki že vsebuje DDV.
          S klikom na gumb: “NA BLAGAJNO” se kupec premakne na drugo stopnjo
          nakupa (Podatki in plačilo). Na vseh stopnjah oddaje naročila je kupcu
          z infografiko v zgornjem desnem robu strani prikazano na kateri
          stopnji oddaje naročila se nahaja.
        </Text>
        <Text>
          Na stopnji 2 (Podatki in plačilo) kupec izpolni podatke o plačniku in
          naslovu dostave ter izbere način plačila ter dostave. Na desni strani
          je viden povzetek naročila. Cena dostave se izračuna glede na težo
          izdelkov v košarici. V primeru izbire “osebni prevzem” se strošek
          dostave ne zaračuna. Kupec odgovarja za pravilnost vnesenih podatkov
          za oddajo naročila. Na tej točki se lahko kupec z uporabo možnosti
          “nazaj” vrne na prvi korak naročila in ponovno ureja izdelke v
          košarici.
        </Text>
        <Text>
          Kupec izbere način plačila. Izbira lahko med možnostjo neposredne
          bančne transakcije in storitve Paypal.
        </Text>
        <Text>
          Ko kupec preveri vnesene podatke in označi, da je prebral in se
          strinja s pogoji poslovanja spletne strani lahko s klikom na gumb
          “ODDAJ NAROČILO Z OBVEZNOSTJO PLAČILA” odda naročilo in s tem zaključi
          postopek nakupa na strani. Pri izbiri možnosti plačila prek neposredne
          bančne transkacije se status naročila premakne na zadnjo stopnjo 3
          (Zaključek), kjer je kupec obveščen o uspešnosti oddaje naročila. Pri
          izbiri možnosti plačila prek Paypala je kupec preusmerjen na
          ponudnikovo spletno stran, kjer izvede plačilo. Po tem, pa ponovno na
          stran podjetja, kjer je na stopnji 3 obveščen o uspešnosti oddaje
          naročila.
        </Text>
        <Text>
          Na stopnji 3 (Zaključek) je kupec je obveščen o tem, da je bilo
          naročilo sprejeto v obdelavo, v primeru izbire osebnega prevzema pa se
          mu izpišejo tudi kontaktni podatki podjetja za prevzem. Kupec na svoj
          naveden e-poštni naslov prejme sporočilo s povzetkom naročila ter
          potrditvijo prejetja naročila v obdelavo. V primeru plačila prek
          neposredne bančne transakcije, pa še podatke potrebne za bančno
          nakazilo na račun podjetja ter podatek o trajanju obveznosti za
          plačilo. S tem je med ponudnikom in kupcem sklenjena kupoprodajna
          pogodba.
        </Text>
        <Text>
          Ko podjetje v dogovorjenem roku pripravi in pošlje naročilo je kupec o
          tem obveščen preko e-poštnega sporočila, ki mu je dodan tudi račun v
          e-obliki. Natisnjen račun prejme kupec skupaj z naročenimi izdelki.
        </Text>
        <Text>
          Kupoprodajno pogodbo je mogoče skleniti v slovenskem jeziku. Besedilo
          pogodbe podjetje hrani za potrebe poslovanja. Kupec lahko do pogodbe v
          elektronski obliki dostopa kadarkoli preko svojega e-poštnega predala.
        </Text>
      </div>
    </div>
  );
}


const Title = tw.h1`
font-extrabold text-3xl my-4
`

const Text = tw.p`
font-light text-lg my-2`

