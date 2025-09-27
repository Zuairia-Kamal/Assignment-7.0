import { useState, useEffect } from "react";
import Toggles_Btns from "./Toggles-Btns";
import CountBox from "./CountBox";
import Container from "./Container";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPromise.then((res) => setData(res));
  }, [fetchPromise]);

  const filteredData =
    toggleStatus === "All"
      ? data
      : data.filter((element) => element.status === toggleStatus);

 
  const tickets = [
    {
      id: "#1001",
      title: "Login Issues - Can't Access Account",
      description: "Customer is unable to log in to their account.",
      priority: "HIGH PRIORITY",
      customer: "John Smith",
      date: "1/15/2024",
      status: "Open",
    },
    {
      id: "#1002",
      title: "Payment Failure - Card Declined",
      description:
        "Customer attempted to pay using visa ending 1234 but the payment keeps failing despite sufficent balance.",
      priority: "HIGH PRIORITY",
      customer: "Sarah Johnson",
      date: "1/16/2024",
      status: "Open",
    },
    {
      id: "#1003",
      title: "Unable to Download Invoice",
      description: "App crashes immediately after logging in.",
      priority: "MEDIUM PRIORITY",
      customer: "Michael Brown",
      date: "1/17/2024",
      status: "In-Progress",
    },
    {
      id: "#1004",
      title: "Incorrect Billing Address",
      description:
        "Customer's billing address shows a different city. They updated it but it still displays.",
      priority: "LOW PRIORITY",
      customer: "Emily Davis",
      date: "1/18/2024",
      status: "Open",
    },
    {
      id: "#1005",
      title: "App Crash on Launch",
      description:
        "Customer reports that the mobile app crashes immediatley upon opening on Android 13.",
      priority: "HIGH PRIORITY",
      customer: "David Wilson",
      date: "1/19/2024",
      status: "Open",
    },
    {
      id: "#1006",
      title: "Refund Not Processed",
      description:
        "Customer requested a refund two weeks ago but has not received the amount yet.",
      priority: "MEDIUM PRIORITY",
      customer: "Sophia Taylor",
      date: "1/20/2024",
      status: "In-Progress",
    },
    {
      id: "#1007",
      title: "Two-Factor Authentication Issue",
      description:
        "Customer is not receiving 2FA codes on their registered phone number.",
      priority: "HIGH PRIORITY",
      customer: "James Anderson ",
      date: "1/21/2024",
      status: "Open",
    },
    {
      id: "#1008",
      title: "Unable to Update Profile Picture",
      description:
        "Customer tries to upload a news profile picture but get 'Upload Failed' error.",
      priority: "MEDIUM PRIORITY",
      customer: "Olivia Martinez",
      date: "1/22/2024",
      status: "Open",
    },
    {
      id: "#1009",
      title: "Subscription Auto-Renewal ",
      description:
        "Customer wants to enable auto-renewal for their subscription but the the toggle is disabled.",
      priority: "MEDIUM PRIORITY",
      customer: "Liam Thomas",
      date: "1/17/2024",
      status: "In-Progress",
    },
    {
      id: "#1010",
      title: "Missing Order confirmmation Email",
      description:
        "Customer placed an order but didn't receive a confirmation email even though payment payment successeded .",
      priority: "MEDIUM PRIORITY",
      customer: "Isabella Garcia",
      date: "1/24/2024",
      status: "Open",
    },
  ];

  return (
    <div>
      <CountBox data={data} />
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4"></h3>
            {filteredData.length === 0 ? (
              <p className="text-gray-500"></p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {filteredData.slice(0, 10).map((issue, ind) => (
                  <Card
                    key={ind}
                    issue={issue}
                    data={data}
                    setData={setData}
                  />
                ))}
              </div>
            )}
          </div>

         
          <div>
            <h2 className="text-2xl font-bold mb-4">Task Status</h2>
            <p className="text-gray-500 mb-6">
              Select a ticket to add it to Task Status
            </p>

            <h3 className="font-semibold text-lg mb-2">Resolved Task</h3>
            <p className="text-gray-400">No resolved tasks yet.</p>
          </div>
        </div>
      </Container>

      <Container>
        <h2 className="text-2xl font-bold mb-4">Customer Tickets </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="shadow-md rounded-md bg-white p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{ticket.title}</h3>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                  {ticket.status}
                </button>
              </div>
              
              <p className="text-gray-600 mb-3">{ticket.description}</p>

              <div className="flex justify-between text-sm text-gray-500">
                <span>{ticket.id}</span>
                <span
                  className={`font-semibold ${
                    ticket.priority.includes("High")
                      ? "text-red-500"
                      : ticket.priority.includes("Medium")
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {ticket.priority}
                </span>
                <span>{ticket.customer}</span>
                <span>📅 {ticket.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
