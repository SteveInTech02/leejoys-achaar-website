/*
 * LeeJoys Achaar - Shared JavaScript Behaviour
 * Used across all pages of the website.
 */
(function () {
    // Contact details used for order enquiries.
    var WHATSAPP = "27728001306";          // WhatsApp number (no + or spaces)
    var EMAIL = "leejoysatchaar@gmail.com"; // Order email address


    /* =========================================
       1. MOBILE NAVIGATION MENU
       ========================================= */

    // Get the menu button and navigation links.
    var burger = document.getElementById("burger");
    var links = document.getElementById("links");

    // Add the click event only if both elements exist.
    if (burger && links) {
        burger.addEventListener("click", function () {
            // Toggle the menu's open class.
            var open = links.classList.toggle("open");

            // Update the accessibility state of the menu button.
            burger.setAttribute("aria-expanded", open);
        });
    }


    /* =========================================
       2. CONTACT PAGE MESSAGE GENERATOR
       ========================================= */

    // Build the order enquiry using the customer's name and message.
    function message() {
        // Read and trim the customer's name.
        var name = document.getElementById("fName").value.trim();

        // Read and trim the customer's order details.
        var text = document.getElementById("fMsg").value.trim();

        // Return the complete message, using a default if no message was entered.
        return (
            "Hi LeeJoys Achaar, " +
            (name ? "my name is " + name + ". " : "") +
            (text || "I'd like to place an order.")
        );
    }


    /* =========================================
       3. SEND ORDER ENQUIRY VIA WHATSAPP
       ========================================= */

    // Find the WhatsApp submission button.
    var sendWa = document.getElementById("sendWa");

    // Attach the click event if the button exists on the page.
    if (sendWa) {
        sendWa.addEventListener("click", function () {
            // Encode the message so it can be safely included in the URL.
            var encodedMessage = encodeURIComponent(message());

            // Open WhatsApp with the prepared order enquiry.
            window.open(
                "https://wa.me/" + WHATSAPP + "?text=" + encodedMessage,
                "_blank"
            );
        });
    }


    /* =========================================
       4. SEND ORDER ENQUIRY VIA EMAIL
       ========================================= */

    // Find the email submission button.
    var sendMail = document.getElementById("sendMail");

    // Attach the click event if the button exists on the page.
    if (sendMail) {
        sendMail.addEventListener("click", function () {
            // Prepare the email subject and message body.
            location.href =
                "mailto:" + EMAIL +
                "?subject=" + encodeURIComponent("Order enquiry") +
                "&body=" + encodeURIComponent(message());
        });
    }


    /* =========================================
       5. STORE OPENING HOURS STATUS
       Home and Visit pages
       Edit the opening hours in this section if needed.
       ========================================= */

    try {
        // Get the current date and time in South African time.
        var now = new Date(
            new Date().toLocaleString("en-US", {
                timeZone: "Africa/Johannesburg"
            })
        );

        // Extract the day of the week and decimal hour.
        var day = now.getDay();
        var hour = now.getHours() + now.getMinutes() / 60;

        // Variables used to determine and display the store status.
        var open;
        var text;


        /* Monday to Friday: 09:00–18:00 */
        if (day >= 1 && day <= 5) {
            open = hour >= 9 && hour < 18;

            text = open
                ? "Open now \u00b7 closes 18:00"
                : "Closed now \u00b7 opens 09:00";
        }

        /* Saturday: 09:00–17:00 */
        else if (day === 6) {
            open = hour >= 9 && hour < 17;

            text = open
                ? "Open now \u00b7 closes 17:00"
                : "Closed now \u00b7 opens 09:00 Saturday";
        }

        /* Sunday: Closed */
        else {
            open = false;
            text = "Closed today \u00b7 opens Monday 09:00";
        }


        /* =====================================
           6. UPDATE THE OPEN/CLOSED INDICATORS
           ===================================== */

        // Add the appropriate CSS class to each status indicator.
        // "o" represents open, while "c" represents closed.
        document.querySelectorAll("[data-dot]").forEach(function (e) {
            e.classList.add(open ? "o" : "c");
        });

        // Display the current opening status wherever required.
        document.querySelectorAll("[data-st]").forEach(function (e) {
            e.textContent = text;
        });

    } catch (e) {
        // Ignore errors if the opening-hours status cannot be calculated.
    }

})();