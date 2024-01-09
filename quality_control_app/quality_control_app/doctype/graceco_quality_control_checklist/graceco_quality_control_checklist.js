// Copyright (c) 2024, Montego-arch and contributors
// For license information, please see license.txt

frappe.ui.form.on("Graceco Quality Control Checklist", {
	
    checklist: function(frm){
    
        let checklist = frm.doc.checklist;
        if(checklist){
            frappe.call({
                method:"quality_control_app.api.get_checklist_activities",
                args:{checklist:checklist}
            }).done((r) => {
                
                frm.doc.activities = []

                $.each(r.message, function(_i, e){
                    let entry = frm.add_child("activities");
                    entry.activity = e.name;
                })
                refresh_field("activities")
            })
        }
    }
});
