"use client";

import { useState, useEffect } from "react";
import "./register.css"; // Updated CSS file

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        console.log("Fetching registrations...");
        const res = await fetch("http://localhost:3000/api/register");

        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("✅ Registrations received:", data);
        setRegistrations(data);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError("Failed to load registrations.");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="registration-container">
      <h2 className="registration-title">All Registrations</h2>
      {loading && <p className="registration-loading">Loading...</p>}
      {error && <p className="registration-error">{error}</p>}
      <div className="registration-list">
        {registrations.length > 0 ? (
          registrations.map((reg) => (
            <div key={reg._id} className="registration-card">
              <div className="registration-info">
                <strong>{reg.name}</strong>
                <p>{reg.email}</p>
                <span className="registration-badge">{reg.event}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="registration-empty">No registrations found.</p>
        )}
      </div>
    </div>
  );
}
