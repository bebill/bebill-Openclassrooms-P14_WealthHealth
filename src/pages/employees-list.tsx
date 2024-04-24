import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/utils/selectors";
import { EmployeesTable } from "../components/EmployeesTable";

export const EmployeesList = () => {
  const employeesData = useSelector(selectEmployees);

  useEffect(() => {
    console.log("Fetched employees:", employeesData);
  }, [employeesData]);
  return (
    <main className="employees-list-page">
      <div className="employees-list-container">
        <h2 className="employees-list-heading">Current Employees</h2>
        <EmployeesTable employees={employeesData} />
      </div>
    </main>
  );
};