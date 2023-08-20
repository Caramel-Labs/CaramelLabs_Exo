const { fetchTripDetails } = require("../controllers/bookingControllers");
const { tripModel } = require("../Models/tripModel");

jest.mock("../Models/tripModel");

const mockTrip = {
  _id: "64ddabe6c50e42701f869076",
  passengers: ["64df1d6d660b27f90c195a3a"],
  spaceship: {
    name: "Spacecraft 1",
  },
};

const req = {
  body: {
    _id: "64ddabe6c50e42701f869076",
  },
};

const res = {
  status: jest.fn(() => res),
  json: jest.fn(),
};

describe("fetchTripDetails", () => {
  it("should return trip details if valid _id is provided", async () => {
    // Mock the findById method
    tripModel.findById.mockReturnValue({
      populate: jest.fn().mockReturnValue(mockTrip),
    });

    // Call the function with mocked req and res objects
    await fetchTripDetails(req, res);

    // Assertion: Check if res.status, res.json, and console.log were called correctly
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTrip);
    expect(console.log).toHaveBeenCalledWith(mockTrip);
  });

  it("should return 404 if trip object not found", async () => {
    // Mock tripModel's findById method to return null (not found)
    tripModel.findById.mockResolvedValueOnce(null);

    await fetchTripDetails(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Trip object not found" });
    expect(console.log).toHaveBeenCalledWith("Trip object not found");
  });

  it("should return 400 and log error if there is an error", async () => {
    const errorMessage = "An error occurred";
    tripModel.findById.mockRejectedValueOnce(new Error(errorMessage));

    await fetchTripDetails(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(console.log).toHaveBeenCalledWith(
      "Error is in the fetchTripDetails function",
      expect.any(Error)
    );
    expect(console.log).toHaveBeenCalledWith(errorMessage);
  });
});
