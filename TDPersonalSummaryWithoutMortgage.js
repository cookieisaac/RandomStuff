// ==UserScript==
// @name         TD Personal Summary Without Mortgage
// @namespace    http://ikema.tampermonkey.net/
// @version      0.1
// @description  Update TD Personal Summary excluding Mortgage Amount and Home Line of Credit
// @author       Ike Ma
// @match        https://easyweb.td.com/waw/ezw/*
// @grant        none
// ==/UserScript==

//GreaseMonkey script for customized TD Online Banking view

//Run the script only after the page load
window.addEventListener('load', ExcludeMortgageFromPersonalSummary, false);

function ExcludeMortgageFromPersonalSummary() {
    //1. Retrive information from "My Personal Summary"
    var PersonalSummary = window.frames["tddetails"].document.getElementById("pfs_main");
    var PS_Rows = PersonalSummary.getElementsByTagName("tr");
    var PS_BankingRow = PS_Rows[0];
    var PS_CreditRow = PS_Rows[1];
    var PS_InvestmentRow = PS_Rows[2];
    var PS_TotalRow = PS_Rows[3];

    var PS_CreditValueTextOld = PS_CreditRow.children[1].textContent;
    var PS_TotalValueTextOld = PS_TotalRow.children[1].textContent;
    var credit_old = Number(PS_CreditValueTextOld.replace(/[^0-9\.-]+/g,""));
    var total_old = Number(PS_TotalValueTextOld.replace(/[^0-9\.-]+/g,""));

    //2. Retrive information from "Credit Cards, Loans & Mortgages" Section
    var CreditSection = window.frames["tddetails"].document.getElementsByClassName("td-target-creditcards")[0];
    var CS_Rows = CreditSection.getElementsByTagName("tr");
    var CS_MortgageRow = CS_Rows[1]; //Mortgage
    var CS_HelocRow = CS_Rows[2]; //Home Equity Line of Credit

    var CS_MortgageValueText = CS_MortgageRow.children[1].textContent;
    var CS_HelocValueText = CS_HelocRow.children[1].textContent;
    var mortgage = Number(CS_MortgageValueText.replace(/[^0-9\.-]+/g,""));
    var heloc = Number(CS_HelocValueText.replace(/[^0-9\.-]+/g,""));

    //3. Exclude Mortgage and Home Equity Line of Credit from Personal Summary
    var credit_new = credit_old - mortgage - heloc;
    var total_new = mortgage + heloc - total_old;

    //4. Update Personal Summary Section with updated information
    //`toFixed(2)`: Display with two decimals to avoid javascript floating arithmetic issues
    //`replace(/(\d)(?=(\d{3})+\.)/g, '$1,')`: add a comma every three digits
    var CreditValueTextNew = "$" + credit_new.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //Assuming always negative
    var TotalValueTextNew = "CDN $" + total_new.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    PS_CreditRow.children[1].textContent = CreditValueTextNew;
    //`Total` is wrapped in <strong> tag, hence another layer of children
    PS_TotalRow.children[1].children[0].textContent = TotalValueTextNew;
}
