

<style>
.content-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    /* Add position relative to the content body */
}

.content-body analytics-sidebar {
    display: flex;
    justify-content: left;
}

.head-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    /* Add position sticky to the head title */
    top: 0;
    /* Set the top position to 0 */
    z-index: 1;
    /* Add a higher z-index to make sure it's on top */
}

.head-title h1 {
    margin: 0 auto 0 auto;
    text-align: center;
    flex-grow: 1;
}

.head-title h4 {
    text-align: center;
    flex-grow: 1;
    color: white;
}

.content-container {
    border-radius: 20px;
    min-width: 1000px;
    max-width: 80%;
    width: auto;
    box-sizing: border-box;
    font-size: 16px;
    margin-top: 1vh;
    overflow: hidden;
}

.content-main {
    border-radius: 20px;
    min-width: 1000px;
    width: auto;
    box-sizing: border-box;
    font-size: 16px;
    padding: 25px;
    background-color: #86A760;
    max-height: 60vh;
    overflow-y: auto;
    max-width: 90vw;
    margin-top: -4vh;
    display: block;
}

.content-table {
    border-collapse: collapse;
    font-size: 18px;
    width: 100%;
    table-layout: fixed;
    font-weight: bold;
    max-height: 70vh;   
}

.content-table thead tr {
    background-color: #b3b3b3;  
    color: #4b4237;
    text-align: center;
    border-radius: 100px;
    border: solid 1px #736b60;
    position: sticky;
    top: 0;
    z-index: 1;

}

.content-table th,
td {
    padding: 12px 15px;
    text-align: center;
    justify-content: center;
}

.content-table tbody {
    max-height: calc(50vh - 68px);
    overflow-y: auto;

}
.content-table tbody tr:hover {
    background-color: rgba(94, 80, 80, 0.05);
    cursor: not-allowed;
}

.content-table tbody tr:hover td {
    background-color: rgba(77, 70, 70, 0.1);
}

div {
    font-family: "Jost", sans-serif !important;
}

.navbar {
    width: 100vw;
}

#datatable {
    color: C88512;
}
</style>


<template>
    <div class="analytics-page">
        <b-row>
            <nav-bar></nav-bar>
        </b-row>
        <b-row>
            <b-col cols="2"> <analytics-side-bar></analytics-side-bar></b-col>
            <b-col cols="6">
                <div class="content-container">
                    <div class="head-title">
                        <h1><b>Reports and Summary</b></h1>
                        
                    </div>
                    <div class="content-main">

                        <table id="datatable" class="content-table" style="padding: 25px;">
                            <thead>
                                <tr>
                                    <th>Campaigns</th>
                                    <th>Sales per Campaign</th>
                                    <th>Sources</th>
                                    <th>Expiry Date</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                </tr>
                            </thead>
                         
                                <tbody>
                                    <tr class="table-row">
                                    </tr>
                                    <tr class="table-row">
                                    </tr>
                                    <tr class="table-row">
                                    </tr>
                                    <tr class="table-row">
                                    </tr>
                                    <tr class="table-row">
                                    </tr>
                                    <tr class="table-row">
                                    </tr>
                                </tbody>

                        </table>
                        
                    </div>
                </div>
                <div style="margin-top: 2vh;">
                <b-row>
                        <b-col cols="2"><b-button variant="warning" @click="exportToPdf">Export to PDF</b-button></b-col>
                        <b-col cols="2"><b-button variant="warning" @click="exportToCsv">Export to CSV</b-button></b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>

    </div>
</template>
<script>
import AnalyticsSideBar from '../components/analyticsSideBar.vue';
import navBar from "../components/NavBar.vue";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import jsPDF from "jspdf";
import * as Vue from 'vue';
import "jspdf-autotable";

export default {
    components: { AnalyticsSideBar, navBar },
    name: "Analytics Graphs",
    data:()=>{
        return{

        }
    },
    mounted() {
        console.log("Analytics Graphs Shown in the Screen");
        axios.get('/analytics/fetch_campaign_list')
            .then(function (response) {
                console.log(response);
                $('#datatable').DataTable({
                    data: response.data,
                    lengthMenu: [5, 10, 20, 50],
                    columns: [
                        { title: 'Campaign ID', data: 'id' },
                        { title: 'Sales per Campaign', data: 'amount' },
                        { title: 'Source Country', data: 'bill_country' },
                        { title: 'Expiry Date', data: 'exp_date' },
                        { title: 'Created Date', data: 'created_at' },
                        { title: 'Updated Date', data: 'updated_at' },
                    ]
                });
            });

    },
    methods: {
  exportToPdf() {
    const doc = new jsPDF();
    let date = String(Date());
    doc.autoTable({ html: "#datatable" });
    doc.save("Analytics-Report+"+date+".pdf");
  },
  exportToCsv() {
    const rows = Array.from(document.querySelectorAll("#datatable tbody tr"));
    const csvContent = rows
      .map(row => Array.from(row.querySelectorAll("td")).map(td => td.innerText).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      let date = String(Date());
      link.setAttribute("download", "Analytics-Report-"+date+".csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
},
};


</script>