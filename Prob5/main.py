import requests
from bs4 import BeautifulSoup

# Define URLs
login_url = "https://oas.iitmandi.ac.in/InstituteProcess/Common/Login.aspx"
target_url = "https://oas.iitmandi.ac.in/InstituteProcess/Facility/BusSeatReservation.aspx"

# Start a session
session = requests.Session()

# Step 1: Get the login page to extract hidden fields
response = session.get(login_url)
soup = BeautifulSoup(response.text, "html.parser")

# Extract hidden fields safely
viewstate = soup.find("input", {"id": "__VIEWSTATE"}).get("value", "")
viewstategen = soup.find("input", {"id": "__VIEWSTATEGENERATOR"}).get("value", "")
eventvalidation = soup.find("input", {"id": "__EVENTVALIDATION"}).get("value", "")

# Step 2: Prepare login data
login_data = {
    "__VIEWSTATE": viewstate,
    "__VIEWSTATEGENERATOR": viewstategen,
    "__EVENTVALIDATION": eventvalidation,
    "txtLoginId": "B24121",  # Replace with your LDAP username
    "txtPassword": "Di@12262006",  # Replace with your LDAP password
    "btnLogin": "Log In"
}

# Step 3: Submit the login form
login_response = session.post(login_url, data=login_data)

# Step 4: Check if login was successful
if "Welcome" in login_response.text:  # Adjust this check based on login success
    print("Login successful!")
    
    # Step 5: Access the target page and extract hidden fields
    seat_booking_response = session.get(target_url)
    seat_booking_soup = BeautifulSoup(seat_booking_response.text, "html.parser")
    
    # Extract hidden fields for the seat booking POST request
    post_data = {
        "__VIEWSTATE": seat_booking_soup.find("input", {"id": "__VIEWSTATE"}).get("value", ""),
        "__VIEWSTATEGENERATOR": seat_booking_soup.find("input", {"id": "__VIEWSTATEGENERATOR"}).get("value", ""),
        "__EVENTVALIDATION": seat_booking_soup.find("input", {"id": "__EVENTVALIDATION"}).get("value", ""),
        "__EVENTTARGET": "",
        "__EVENTARGUMENT": "",
        "ctl00$ContentPlaceHolder1$TabContainer1$TabPanel1$txtFromDate": "26/01/2025",
        "ctl00$ContentPlaceHolder1$TabContainer1$TabPanel1$ddlRoute": "1",  # Route 1

    }

    # Step 6: Send POST request to book seat
    booking_response = session.post(target_url, data=post_data)
    if booking_response.status_code == 200:
        print("POST request successful!")
        print(booking_response.text)  # Inspect this response to verify success
    else:
        print(f"POST request failed with status code: {booking_response.status_code}")
    print(booking_response.text)
else:
    print("Login failed. Please check your credentials.")
