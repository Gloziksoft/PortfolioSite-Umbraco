# Umbraco Osobná Webstránka / Personal Website

## 📦 Requirements / Požiadavky

- Visual Studio Community
- Microsoft SQL Server
- .NET SDK
- SQL Server Management Studio (SSMS)

---

## 🛠️ Setup Instructions / Inštalačný postup

### 1. Download the Project / Stiahnutie projektu

Download the entire project folder to your computer.

---

### 2. Add the Validation Library / Pridanie validačnej knižnice

1. Open the solution in **Visual Studio Community**.
2. Go to the `dufeksoft.lib` folder.
3. Add the file `dufeksoft.lib.csproj` to your solution:
   - Right-click the solution → `Add` → `Existing Project...`
   - Locate and select `dufeksoft.lib/dufeksoft.lib.csproj`.
4. Right-click your main web project → `Add` → `Reference...`
5. In the `Projects` tab, check `dufeksoft.lib` and confirm.

> This library contains important **validation logic** and is required for the project to work.

---

### 3. Set Up the Database / Vytvorenie databázy

1. Open **SQL Server Management Studio (SSMS)**.
2. Create a new database (e.g. `PortfoliokDB`).
3. Open the provided `DB.sql` script located in the root of the project.
4. Run the script to create tables and insert data.

---

### 4. Configure Database in `web.config` / Nastavenie `web.config`

1. Open the `web.config` file in your main project.
2. Find the `<connectionStrings>` section.
3. Update it with your local SQL Server instance and database name. Example:

```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Server=localhost;Database=PeterGlozikDB;Trusted_Connection=True;" 
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

> 🔐 You can find connection credentials and passwords in the file `Heslo.txt`.

---

### 5. Run the Project / Spustenie projektu

1. In Visual Studio Community, set the main web project as the **Startup Project**.
2. Build the solution.
3. Press **F5** to run the project.

---

## ⚠️ Notes / Poznámky

- Only **Visual Studio Community** is supported.
- Do **not** forget to add and reference the `dufeksoft.lib` project.
- Make sure your SQL Server is running before launching the app.
- Database login details can be found in `Heslo.txt`.

---

# 🧾 Umbraco Osobná Webstránka (Slovenská verzia)

## 📦 Požiadavky

- Visual Studio Community
- Microsoft SQL Server
- .NET SDK
- SQL Server Management Studio (SSMS)

---

## 🛠️ Inštalačný postup

### 1. Stiahnutie projektu

Stiahni celý priečinok projektu do svojho počítača.

---

### 2. Pridanie validačnej knižnice

1. Otvor riešenie vo **Visual Studio Community**.
2. Prejdi do priečinka `dufeksoft.lib`.
3. Pridaj súbor `dufeksoft.lib.csproj` do riešenia:
   - Pravý klik na riešenie → `Add` → `Existing Project...`
   - Vyhľadaj a vyber `dufeksoft.lib/dufeksoft.lib.csproj`.
4. Pravý klik na hlavný webový projekt → `Add` → `Reference...`
5. V záložke `Projects` zaškrtni `dufeksoft.lib` a potvrď.

> Táto knižnica obsahuje dôležité **validačné logiky** a je potrebná pre funkčnosť projektu.

---

### 3. Vytvorenie databázy

1. Otvor **SQL Server Management Studio (SSMS)**.
2. Vytvor novú databázu (napr. `PortfoliokDB`).
3. Otvor priložený skript `DB.sql` v koreňovom priečinku projektu.
4. Spusť skript, ktorý vytvorí tabuľky a naplní úvodné dáta.

---

### 4. Nastavenie databázy vo `web.config`

1. Otvor súbor `web.config` v hlavnom projekte.
2. Vyhľadaj sekciu `<connectionStrings>`.
3. Nahraď ju vlastnými údajmi podľa tvojej SQL inštancie. Príklad:

```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Server=localhost;Database=PeterGlozikDB;Trusted_Connection=True;" 
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

> 🔐 Prihlasovacie údaje k databáze nájdeš v súbore `Heslo.txt`.

---

### 5. Spustenie projektu

1. Vo Visual Studiu nastav hlavný projekt ako **Startup Project**.
2. Zostav riešenie.
3. Stlač **F5** pre spustenie projektu.

---

## ⚠️ Poznámky

- Používaj iba **Visual Studio Community**.
- Nezabudni pridať a prelinkovať knižnicu `dufeksoft.lib`.
- Pred spustením aplikácie sa uisti, že SQL Server beží.
- Prihlasovacie údaje k databáze sú v `Heslo.txt`.