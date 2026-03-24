import { useState } from "react";
import { Plus, Edit, Trash2, UserCheck, UserX, Mail, Phone, Shield, X } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  role: "Manager" | "Staff" | "Chef" | "Host";
  email: string;
  phone: string;
  status: "active" | "inactive";
  joinedDate: string;
  permissions: string[];
}

export default function ManagerEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "John Smith",
      role: "Manager",
      email: "john.smith@gastros.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      joinedDate: "2025-01-15",
      permissions: ["orders", "menu", "tables", "reports"],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Staff",
      email: "sarah.j@gastros.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      joinedDate: "2025-02-20",
      permissions: ["orders", "tables"],
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Chef",
      email: "michael.c@gastros.com",
      phone: "+1 (555) 345-6789",
      status: "active",
      joinedDate: "2024-11-10",
      permissions: ["menu", "orders"],
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Host",
      email: "emily.r@gastros.com",
      phone: "+1 (555) 456-7890",
      status: "active",
      joinedDate: "2025-03-01",
      permissions: ["tables"],
    },
    {
      id: 5,
      name: "David Park",
      role: "Staff",
      email: "david.p@gastros.com",
      phone: "+1 (555) 567-8901",
      status: "inactive",
      joinedDate: "2024-08-15",
      permissions: ["orders"],
    },
  ]);

  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const roles = ["All", "Manager", "Staff", "Chef", "Host"];

  const roleColors = {
    Manager: "bg-purple-100 text-purple-700",
    Staff: "bg-blue-100 text-blue-700",
    Chef: "bg-orange-100 text-orange-700",
    Host: "bg-green-100 text-green-700",
  };

  const toggleStatus = (id: number) => {
    setEmployees(
      employees.map((e) =>
        e.id === id ? { ...e, status: e.status === "active" ? "inactive" : "active" } : e
      )
    );
  };

  const deleteEmployee = (id: number) => {
    if (confirm("Are you sure you want to remove this employee?")) {
      setEmployees(employees.filter((e) => e.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const openEditModal = (employee: Employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const filteredEmployees =
    selectedRole === "All"
      ? employees
      : employees.filter((e) => e.role === selectedRole);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#2D2D2D]">Employee Management</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage staff accounts and permissions
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-lg flex items-center gap-2 transition-colors font-bold shadow-lg shadow-orange-100"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Total Employees</p>
          <p className="text-2xl text-[#2D2D2D] mt-1 font-black">{employees.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl text-[#4CAF50] mt-1 font-black">
            {employees.filter((e) => e.status === "active").length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Inactive</p>
          <p className="text-2xl text-muted-foreground mt-1 font-black">
            {employees.filter((e) => e.status === "inactive").length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <p className="text-sm text-muted-foreground">Managers</p>
          <p className="text-2xl text-[#FF6B35] mt-1 font-black">
            {employees.filter((e) => e.role === "Manager").length}
          </p>
        </div>
      </div>

      {/* Role Filter */}
      <div className="bg-card rounded-xl p-4 shadow-md">
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-lg transition-colors font-bold ${
                selectedRole === role
                  ? "bg-[#FF6B35] text-white"
                  : "bg-background hover:bg-accent text-foreground"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className={`bg-card rounded-[2rem] p-6 shadow-md border-2 transition-all hover:shadow-xl ${
              employee.status === "active" ? "border-transparent hover:border-[#FF6B35]/30" : "border-gray-200 opacity-60"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="font-black text-[#2D2D2D] mb-1">{employee.name}</h4>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${roleColors[employee.role]}`}>
                    {employee.role}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    employee.status === "active" ? "bg-[#4CAF50]/10 text-[#4CAF50]" : "bg-gray-100 text-gray-400"
                  }`}>
                    {employee.status}
                  </span>
                </div>
              </div>
              {employee.status === "active" ? (
                <UserCheck className="w-5 h-5 text-[#4CAF50]" />
              ) : (
                <UserX className="w-5 h-5 text-gray-400" />
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Mail className="w-3 h-3 text-[#FF6B35]" />
                <span className="font-medium truncate">{employee.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone className="w-3 h-3 text-[#FF6B35]" />
                <span className="font-medium">{employee.phone}</span>
              </div>
            </div>

            {/* Permissions */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-3 h-3 text-gray-400" />
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Permissions</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {employee.permissions.map((perm) => (
                  <span key={perm} className="px-2 py-1 bg-gray-100 rounded-lg text-[9px] font-bold text-gray-500 uppercase">
                    {perm}
                  </span>
                ))}
              </div>
            </div>

            {/* Join Date */}
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
              Joined: {new Date(employee.joinedDate).toLocaleDateString()}
            </p>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <button
                onClick={() => toggleStatus(employee.id)}
                className={`flex-1 py-2 rounded-xl transition-all font-bold text-xs uppercase tracking-widest ${
                  employee.status === "active"
                    ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    : "bg-[#4CAF50]/10 text-[#4CAF50] hover:bg-[#4CAF50]/20"
                }`}
              >
                {employee.status === "active" ? "Disable" : "Enable"}
              </button>
              <button
                onClick={() => openEditModal(employee)}
                className="p-2 bg-orange-50 hover:bg-orange-100 text-[#FF6B35] rounded-xl transition-colors"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteEmployee(employee.id)}
                className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#2D2D2D] p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl font-black">
                  {editingEmployee ? "Edit Employee" : "Add New Employee"}
                </h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Staff Management
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-4">
              <p className="text-sm text-gray-500 text-center font-bold">
                This is a demo modal. In production, you would have form fields for:<br />
                Name, Role, Email, Phone, Status, Permissions, and Join Date.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-200 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
