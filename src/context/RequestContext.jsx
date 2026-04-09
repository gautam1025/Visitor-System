import { createContext, useContext, useState } from 'react';

const RequestContext = createContext(null);

export function useRequests() {
    return useContext(RequestContext);
}

const MOCK_REQUESTS = [
    {
        id: 'mock-001',
        visitorName: 'Ravi Kumar',
        phone: '9876543210',
        employee: 'Manager',
        reason: 'Product Demo',
        date: '2026-02-26',
        status: 'Pending',
    },
    {
        id: 'mock-002',
        visitorName: 'Priya Sharma',
        phone: '9123456780',
        employee: 'HR',
        reason: 'Job Interview',
        date: '2026-02-26',
        status: 'Approved',
    },
    {
        id: 'mock-003',
        visitorName: 'Arjun Singh',
        phone: '9988776655',
        employee: 'Director',
        reason: 'Partnership Discussion',
        date: '2026-02-25',
        status: 'Completed',
    },
    {
        id: 'mock-004',
        visitorName: 'Sneha Patel',
        phone: '9871234560',
        employee: 'HR',
        reason: 'Document Submission',
        date: '2026-02-25',
        status: 'Rejected',
    },
];

export function RequestProvider({ children }) {
    const [requests, setRequests] = useState(() => {
        try {
            const stored = localStorage.getItem('vms_requests');
            return stored ? JSON.parse(stored) : MOCK_REQUESTS;
        } catch {
            return MOCK_REQUESTS;
        }
    });

    const persist = (updated) => {
        try {
            localStorage.setItem('vms_requests', JSON.stringify(updated));
        } catch { }
        return updated;
    };

    const addRequest = (req) => {
        setRequests((prev) => persist([...prev, req]));
    };

    const updateRequestStatus = (id, status) => {
        setRequests((prev) => persist(prev.map((r) => (r.id === id ? { ...r, status } : r))));
    };

    return (
        <RequestContext.Provider value={{ requests, addRequest, updateRequestStatus }}>
            {children}
        </RequestContext.Provider>
    );
}
