// Copyright (c) 2024, Montego-arch and contributors
// For license information, please see license.txt

frappe.ui.form.on("Quality Control Checklist", {
    setup: function(frm){
        // check activities duplicate
        frm.check_activities_duplicate = function(frm, row){
            frm.doc.activities.forEach(item=>{
                if(row.activity=='' || row.idx==item.idx){
                    // pass
                } else {
                    if(row.activity==item.activity){
                        // clear field
                        row.activity = '';
                        frappe.throw(__(`<b>${item.activity}</b> already exists at row ${item.idx}`))
                        frm.refresh_field('activities');
                    }
                }
            })
        }
    },
    refresh: function(frrm){

    },
});


// ACTIVITY CHILD TABLE
frappe.ui.form.on("Quality Control Activity", {
    activity: function(frm, cdt, cdn){
        // grab the entire record
        let row = locals[cdt][cdn];
        frm.check_activities_duplicate(frm, row);
    }
})