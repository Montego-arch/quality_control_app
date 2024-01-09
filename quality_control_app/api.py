import frappe

@frappe.whitelist()
def get_checklist_activities(checklist):
    activities = frappe.db.sql(f""" SELECT name FROM `tabActivity` WHERE checklist_name='{checklist}' """, as_dict=True)
    return activities