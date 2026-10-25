// KaiBandham JavaScript


// ================================
// KaiBandham Registration
// ================================


function togglePassword(inputId, button) {

    const input =
        document.getElementById(
            inputId
        );


    if (!input) {
        return;
    }


    if (input.type === "password") {

        input.type = "text";

        button.textContent =
            "Hide";

        button.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        input.type = "password";

        button.textContent =
            "Show";

        button.setAttribute(
            "aria-label",
            "Show password"
        );

    }

}



const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const fullName =
                document.getElementById(
                    "fullName"
                ).value.trim();


            const emailInput =
                document.getElementById(
                    "email"
                );


            const email =
                emailInput.value.trim();


            const password =
                document.getElementById(
                    "password"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            const ageConfirmation =
                document.getElementById(
                    "ageConfirmation"
                ).checked;


            const termsAccepted =
                document.getElementById(
                    "terms"
                ).checked;


            const message =
                document.getElementById(
                    "formMessage"
                );


            const successMessage =
                document.getElementById(
                    "registerSuccessMessage"
                );


            const registerBtn =
                document.getElementById(
                    "registerBtn"
                );


            const loginArea =
                document.getElementById(
                    "registerLoginArea"
                );



            // Hide old messages

            message.textContent = "";

            message.classList.add(
                "d-none"
            );


            successMessage.classList.add(
                "d-none"
            );



            // Full Name

            if (!fullName) {

                message.textContent =
                    "Please enter your full name.";

                message.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "fullName"
                ).focus();

                return;
            }



            // Email

            if (!email) {

                message.textContent =
                    "Please enter your email address.";

                message.classList.remove(
                    "d-none"
                );

                emailInput.focus();

                return;
            }


            if (!emailInput.checkValidity()) {

                message.textContent =
                    "Please enter a valid email address.";

                message.classList.remove(
                    "d-none"
                );

                emailInput.focus();

                return;
            }



            // Password

            if (password.length < 8) {

                message.textContent =
                    "Password must contain at least 8 characters.";

                message.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "password"
                ).focus();

                return;
            }



            // Password Match

            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match. Please check and try again.";

                message.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "confirmPassword"
                ).focus();

                return;
            }



            // Age

            if (!ageConfirmation) {

                message.textContent =
                    "You must confirm that you are 18 years old or older.";

                message.classList.remove(
                    "d-none"
                );

                return;
            }



            // Terms

            if (!termsAccepted) {

                message.textContent =
                    "Please agree to the Terms of Use and Privacy Policy.";

                message.classList.remove(
                    "d-none"
                );

                return;
            }



            /*
            Later Django will:

            1. Validate all submitted data
               again on the server.

            2. Check that the email is
               not already registered.

            3. Apply Django password
               validation.

            4. Securely hash the password.

            5. Create the user account.

            6. Send email verification
               if KaiBandham uses it.

            7. Redirect to login.html
               or automatically sign in,
               depending on the final design.

            8. After login, send the member
               to profile-create.html.

            Important:

            Registration creates the ACCOUNT.

            profile-create.html creates
            the MATRIMONY PROFILE.

            Do not create a public profile
            directly from this form.
            */



            // Frontend demo

            successMessage.classList.remove(
                "d-none"
            );


            registerBtn.disabled =
                true;


            registerBtn.textContent =
                "Account Created";


            loginArea.classList.remove(
                "d-none"
            );

        }
    );

}
// ================================
// KaiBandham Registration end
// ================================



// ================================
// KaiBandham Login
// ================================

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const emailInput =
                document.getElementById(
                    "loginEmail"
                );


            const email =
                emailInput.value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const rememberMe =
                document.getElementById(
                    "rememberMe"
                ).checked;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const loginBtn =
                document.getElementById(
                    "loginBtn"
                );


            // Hide previous message

            message.textContent = "";

            message.classList.add(
                "d-none"
            );



            // Email Required

            if (!email) {

                message.textContent =
                    "Please enter your email address.";

                message.classList.remove(
                    "d-none"
                );

                emailInput.focus();

                return;
            }



            // Email Format

            if (!emailInput.checkValidity()) {

                message.textContent =
                    "Please enter a valid email address.";

                message.classList.remove(
                    "d-none"
                );

                emailInput.focus();

                return;
            }



            // Password Required

            if (!password) {

                message.textContent =
                    "Please enter your password.";

                message.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "loginPassword"
                ).focus();

                return;
            }



            /*
            Later Django will:

            1. Receive:
               - Email
               - Password
               - Remember Me

            2. Find and authenticate the
               KaiBandham account.

            3. If authentication fails,
               always show the generic message:

               "Invalid email or password."

               Do NOT reveal:

               - "Email not registered"
               - "Correct email but wrong password"

            4. If authentication succeeds,
               create the secure login session.

            5. If Remember Me is enabled,
               Django may use a longer
               session duration.

            6. Check whether the member
               has created a matrimony profile.

               NO PROFILE:
                   → profile-create.html

               PROFILE EXISTS:
                   Check profile review status.

                   Pending Review
                   → profile-status.html

                   Changes Required
                   → profile-status.html

                   Approved
                   → profile.html
                     or search.html

            7. Suspended or removed accounts
               should not receive normal
               member access.

            Important:

            JavaScript must NOT decide
            whether the email/password
            combination is correct.

            Authentication belongs to Django.
            */


            // Frontend only:
            // Do not fake a successful login.

            loginBtn.disabled =
                true;


            loginBtn.textContent =
                "Checking...";


            /*
            When Django is connected,
            remove the demo reset below.

            It is included only so the
            frontend button does not remain
            disabled while testing.
            */


            setTimeout(
                function() {

                    loginBtn.disabled =
                        false;

                    loginBtn.textContent =
                        "Login";

                },
                800
            );


            console.log(
                "Login request ready.",
                {
                    email,
                    rememberMe
                }
            );

        }
    );

}


// ================================
// KaiBandham Login end
// ================================


// ================================
// KaiBandham Profile Form in profile-create.html
// ================================

const profileForm =
    document.getElementById(
        "profileForm"
    );


/* ================================
   Show Profile Message
================================ */

function showProfileMessage(
    messageElement,
    message,
    type
) {

    if (!messageElement) {
        return;
    }


    messageElement.textContent =
        message;


    messageElement.className =
        "alert alert-" + type;

}



/* ================================
   Calculate Age
================================ */

function calculateAge(dateString) {

    if (!dateString) {
        return null;
    }


    const birthDate =
        new Date(dateString);


    const today =
        new Date();


    let age =
        today.getFullYear() -
        birthDate.getFullYear();


    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();


    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() <
            birthDate.getDate()
        )
    ) {

        age--;

    }


    return age;

}



/* ================================
   Profile Submit
================================ */

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const message =
                document.getElementById(
                    "profileMessage"
                );


            const submitButton =
                document.getElementById(
                    "submitProfileBtn"
                );


            const statusArea =
                document.getElementById(
                    "profileStatusArea"
                );


            const dob =
                document.getElementById(
                    "dob"
                );


            const minAgeInput =
                document.getElementById(
                    "minAge"
                );


            const maxAgeInput =
                document.getElementById(
                    "maxAge"
                );


            const familyName =
                document.getElementById(
                    "familyContactName"
                ).value.trim();


            const familyRelationship =
                document.getElementById(
                    "familyRelationship"
                ).value;


            const familyPhone =
                document.getElementById(
                    "familyPhone"
                ).value.trim();


            const profilePhoto =
                document.getElementById(
                    "profilePhoto"
                );


            const declaration =
                document.getElementById(
                    "profileDeclaration"
                );


            // Hide old status

            message.textContent = "";

            message.className =
                "alert d-none";


            if (statusArea) {

                statusArea.classList.add(
                    "d-none"
                );

            }



            // ================================
            // Browser Required Fields
            // ================================

            if (!profileForm.checkValidity()) {

                profileForm.reportValidity();

                showProfileMessage(
                    message,
                    "Please complete all required profile fields.",
                    "danger"
                );

                return;

            }



            // ================================
            // Age 18+
            // ================================

            const memberAge =
                calculateAge(
                    dob.value
                );


            if (
                memberAge === null ||
                memberAge < 18
            ) {

                showProfileMessage(
                    message,
                    "You must be at least 18 years old to create a KaiBandham matrimony profile.",
                    "danger"
                );

                dob.focus();

                return;

            }



            // ================================
            // Partner Age Range
            // ================================

            const minAge =
                minAgeInput.value
                    ? parseInt(
                        minAgeInput.value,
                        10
                    )
                    : null;


            const maxAge =
                maxAgeInput.value
                    ? parseInt(
                        maxAgeInput.value,
                        10
                    )
                    : null;


            if (
                minAge !== null &&
                maxAge !== null &&
                minAge > maxAge
            ) {

                showProfileMessage(
                    message,
                    "Minimum partner age cannot be greater than maximum partner age.",
                    "danger"
                );

                minAgeInput.focus();

                return;

            }



            // ================================
            // Family Contact Validation
            // ================================

            const someFamilyInformation =
                familyName ||
                familyRelationship ||
                familyPhone;


            if (someFamilyInformation) {

                if (
                    !familyName ||
                    !familyRelationship ||
                    !familyPhone
                ) {

                    showProfileMessage(
                        message,
                        "If you add a Family Contact, please provide the family contact name, relationship and contact number.",
                        "danger"
                    );

                    return;

                }

            }



            // ================================
            // Profile Photo Validation
            // ================================

            if (
                profilePhoto.files &&
                profilePhoto.files.length > 0
            ) {

                const photo =
                    profilePhoto.files[0];


                const allowedTypes = [
                    "image/jpeg",
                    "image/png",
                    "image/webp"
                ];


                if (
                    !allowedTypes.includes(
                        photo.type
                    )
                ) {

                    showProfileMessage(
                        message,
                        "Profile photo must be a JPG, PNG or WebP image.",
                        "danger"
                    );

                    return;

                }


                const maximumSize =
                    5 * 1024 * 1024;


                if (
                    photo.size > maximumSize
                ) {

                    showProfileMessage(
                        message,
                        "Profile photo must be 5 MB or smaller.",
                        "danger"
                    );

                    return;

                }

            }



            // ================================
            // Accuracy Declaration
            // ================================

            if (!declaration.checked) {

                showProfileMessage(
                    message,
                    "Please confirm that your profile information is accurate.",
                    "danger"
                );

                declaration.focus();

                return;

            }



            /*
            Later Django will:

            1. Verify that the user is logged in.

            2. Verify that the user does not
               already have another active
               matrimony profile.

            3. Validate every field again
               on the server.

            4. Verify that the member is
               18 years old or older.

            5. Save:

               PERSONAL
               - Full Name
               - Date of Birth
               - Gender
               - Religion
               - Marital Status

               CONTACT
               - Personal WhatsApp
               - Personal Contact Method
               - Family Contact Name
               - Relationship
               - Family Contact Number
               - Family Contact Method

               LOCATION
               - Kerala District
               - Town / City

               PROFILE
               - Education
               - Occupation
               - Communication Method
               - Preferred Communication
               - Profile Photo
               - About Me
               - Partner Preferences

               PRIVACY
               - WhatsApp Privacy
               - Family Contact Privacy
               - Email Privacy
               - Photo Privacy

            6. Set:

               profile_status =
               "Pending Review"

            7. Do NOT make the profile
               publicly searchable yet.

            8. Add the profile to:

               admin-dashboard.html
               → Approve New Profiles

            9. Admin can choose:

               Approved

               OR

               Changes Required

            10. Update:

                profile-status.html

            11. Create a visual notification
                when the status changes.

            Important:

            Normal new-profile review does
            NOT use "Rejected".

            Changes Required is NOT
            punishment or suspension.
            */



            // ================================
            // Frontend Demo Success
            // ================================

            showProfileMessage(
                message,
                "Your profile has been submitted for review. Status: Pending Review.",
                "success"
            );


            submitButton.disabled =
                true;


            submitButton.textContent =
                "Submitted for Review";


            if (statusArea) {

                statusArea.classList.remove(
                    "d-none"
                );

            }


            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


// ================================
// KaiBandham Profile Form end
// ================================


// ================================
// KaiBandham Profile Search search.html
// ================================


const searchForm =
    document.getElementById(
        "searchForm"
    );


const searchMessage =
    document.getElementById(
        "searchMessage"
    );


const searchResultText =
    document.getElementById(
        "searchResultText"
    );



/* ================================
   Search Message
================================ */

function showSearchMessage(
    message,
    type
) {

    if (!searchMessage) {
        return;
    }


    searchMessage.textContent =
        message;


    searchMessage.className =
        "alert alert-" + type;

}



/* ================================
   Search Form
================================ */

if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const minimumAgeValue =
                document.getElementById(
                    "minimumAge"
                ).value;


            const maximumAgeValue =
                document.getElementById(
                    "maximumAge"
                ).value;


            const minAge =
                minimumAgeValue
                    ? parseInt(
                        minimumAgeValue,
                        10
                    )
                    : null;


            const maxAge =
                maximumAgeValue
                    ? parseInt(
                        maximumAgeValue,
                        10
                    )
                    : null;



            // Hide Previous Message

            if (searchMessage) {

                searchMessage.textContent = "";

                searchMessage.className =
                    "alert d-none";

            }



            // Age Validation

            if (
                minAge !== null &&
                maxAge !== null &&
                minAge > maxAge
            ) {

                showSearchMessage(
                    "Minimum age cannot be greater than maximum age.",
                    "danger"
                );


                document.getElementById(
                    "minimumAge"
                ).focus();


                return;

            }



            // Get Filters

            const district =
                document.getElementById(
                    "district"
                ).value;


            const religion =
                document.getElementById(
                    "religion"
                ).value;


            const maritalStatus =
                document.getElementById(
                    "searchMaritalStatus"
                ).value;


            const communicationMethod =
                document.getElementById(
                    "communicationMethod"
                ).value;


            const education =
                document.getElementById(
                    "searchEducation"
                ).value;


            const occupation =
                document.getElementById(
                    "searchOccupation"
                ).value.trim();



            /*
            Later Django will:

            1. Verify that the user
               is logged in.

            2. Check whether the member
               is allowed to use
               profile search.

            3. Search only profiles that are:

               - Approved
               - Active
               - Profile Visibility = Visible

            4. Never return:

               - Pending Review profiles
               - Changes Required profiles
               - Suspended accounts
               - Removed accounts
               - Hidden profiles
               - Profiles blocked by
                 the current member

            5. Apply filters:

               - Minimum Age
               - Maximum Age
               - District
               - Religion
               - Marital Status
               - Communication Method
               - Education
               - Occupation

            6. Respect privacy settings.

               Personal WhatsApp:
               Never display in search.

               Email:
               Never display in search.

               Family Contact:
               Not needed on search cards.

               Photo:
               Show according to
               Photo Privacy.

            7. Return profile ID so the
               View Profile URL becomes:

               /profiles/KB0002/

               instead of the temporary
               frontend query URL.

            8. Sort using the selected
               search option.

            9. Paginate results when
               there are many profiles.
            */



            // Frontend Demo

            showSearchMessage(
                "Search filters are ready. Django will load matching profiles later.",
                "success"
            );


            if (searchResultText) {

                searchResultText.textContent =
                    "Example results shown. Real matching profiles will be loaded from Django.";

            }


            console.log(
                "Search filters:",
                {
                    minAge,
                    maxAge,
                    district,
                    religion,
                    maritalStatus,
                    communicationMethod,
                    education,
                    occupation
                }
            );

        }
    );



    /* ================================
       Clear Filters
    ================================ */

    searchForm.addEventListener(
        "reset",
        function() {

            setTimeout(
                function() {

                    if (searchMessage) {

                        searchMessage.textContent = "";

                        searchMessage.className =
                            "alert d-none";

                    }


                    if (searchResultText) {

                        searchResultText.textContent =
                            "Example approved profiles for frontend design.";

                    }

                },
                0
            );

        }
    );

}



/* ================================
   Save Profile Buttons
================================ */

const saveProfileButtons =
    document.querySelectorAll(
        ".save-profile-btn"
    );


saveProfileButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const profileId =
                    button.dataset.profileId;


                const alreadySaved =
                    button.dataset.saved === "true";


                if (alreadySaved) {

                    button.dataset.saved =
                        "false";


                    button.textContent =
                        "Save Profile";


                    showSearchMessage(
                        profileId + " removed from Saved Profiles.",
                        "secondary"
                    );

                } else {

                    button.dataset.saved =
                        "true";


                    button.textContent =
                        "Saved ✓";


                    showSearchMessage(
                        profileId + " added to Saved Profiles.",
                        "success"
                    );

                }


                /*
                Later Django will save or
                remove this profile from the
                logged-in member's
                Saved Profiles list.
                */

            }
        );

    }
);

// ================================
// KaiBandham Profile Search end
// ================================

// ================================
// KaiBandham View Profile
// ================================


const viewProfileMessage =
    document.getElementById(
        "viewProfileMessage"
    );



/* ================================
   Page Message
================================ */

function showViewProfileMessage(
    message,
    type
) {

    if (!viewProfileMessage) {
        return;
    }


    viewProfileMessage.textContent =
        message;


    viewProfileMessage.className =
        "alert alert-" + type;


    viewProfileMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* ================================
   Send Interest
================================ */

const sendInterestBtn =
    document.getElementById(
        "sendInterestBtn"
    );


if (sendInterestBtn) {

    sendInterestBtn.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "Send an interest to this member?"
                );


            if (!confirmed) {
                return;
            }


            sendInterestBtn.textContent =
                "✓ Interest Sent";


            sendInterestBtn.disabled =
                true;


            showViewProfileMessage(
                "Your interest has been sent. Messaging will become available only if this member accepts your interest.",
                "success"
            );


            /*
            Later Django will:

            1. Verify the current user is logged in.

            2. Verify both accounts are active.

            3. Verify the target profile is
               approved and visible.

            4. Make sure an interest has not
               already been sent.

            5. Create the interest record
               with status:

               Pending

            6. Create a notification for
               the receiving member.

            7. Messaging remains unavailable
               until the interest is accepted.
            */

        }
    );

}



/* ================================
   Save Profile
================================ */

const saveProfileBtn =
    document.getElementById(
        "saveProfileBtn"
    );


if (saveProfileBtn) {

    saveProfileBtn.addEventListener(
        "click",
        function() {

            const isSaved =
                saveProfileBtn.dataset.saved ===
                "true";


            if (isSaved) {

                saveProfileBtn.dataset.saved =
                    "false";


                saveProfileBtn.textContent =
                    "♡ Save Profile";


                showViewProfileMessage(
                    "Profile removed from Saved Profiles.",
                    "secondary"
                );

            } else {

                saveProfileBtn.dataset.saved =
                    "true";


                saveProfileBtn.textContent =
                    "♥ Saved";


                showViewProfileMessage(
                    "Profile added to Saved Profiles.",
                    "success"
                );

            }


            /*
            Later Django will save or remove
            this profile from the logged-in
            member's Saved Profiles list.
            */

        }
    );

}



/* ================================
   Hide Profile
================================ */

const hideProfileBtn =
    document.getElementById(
        "hideProfileBtn"
    );


if (hideProfileBtn) {

    hideProfileBtn.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "Hide this profile from your KaiBandham search and recommendations?"
                );


            if (!confirmed) {
                return;
            }


            hideProfileBtn.textContent =
                "✓ Profile Hidden";


            hideProfileBtn.disabled =
                true;


            showViewProfileMessage(
                "This profile has been hidden for you. Hiding does not report or punish the member.",
                "secondary"
            );


            /*
            Later Django will:

            - Save this Profile ID in the
              current user's hidden profiles.

            - Remove the profile from this
              user's search results and
              recommendations.

            - Do NOT create a report.

            - Do NOT warn or punish
              the hidden member.
            */

        }
    );

}



/* ================================
   Block Contact
================================ */

const confirmBlockBtn =
    document.getElementById(
        "confirmBlockBtn"
    );


if (confirmBlockBtn) {

    confirmBlockBtn.addEventListener(
        "click",
        function() {

            const profileId =
                confirmBlockBtn.dataset.profileId;


            /*
            Later Django will create
            a Blocked Contact record.

            Blocking stops this member from
            sending the current user:

            - New Interests
            - Messages
            - Personal WhatsApp Requests
            - Other member-to-member contact

            Important:

            Blocking does NOT:

            - Create a report
            - Warn the member
            - Penalize the member
            - Suspend the account
            - Damage reputation
            */


            const blockModalElement =
                document.getElementById(
                    "blockContactModal"
                );


            if (
                blockModalElement &&
                typeof bootstrap !== "undefined"
            ) {

                const blockModal =
                    bootstrap.Modal.getOrCreateInstance(
                        blockModalElement
                    );


                blockModal.hide();

            }


            showViewProfileMessage(
                "Contact from this member has been blocked. Blocking is a personal privacy action and does not report or punish the member.",
                "success"
            );


            confirmBlockBtn.disabled =
                true;


            console.log(
                "Blocked contact:",
                profileId
            );

        }
    );

}



/* ================================
   Report Profile
================================ */

const submitReportBtn =
    document.getElementById(
        "submitReportBtn"
    );


if (submitReportBtn) {

    submitReportBtn.addEventListener(
        "click",
        function() {

            const reportReason =
                document.getElementById(
                    "reportReason"
                );


            const reportDetails =
                document.getElementById(
                    "reportDetails"
                );


            const reportModalMessage =
                document.getElementById(
                    "reportModalMessage"
                );


            const profileId =
                submitReportBtn.dataset.profileId;



            // Clear Previous Error

            reportModalMessage.textContent =
                "";


            reportModalMessage.classList.add(
                "d-none"
            );



            // Reason Required

            if (!reportReason.value) {

                reportModalMessage.textContent =
                    "Please select a report reason.";


                reportModalMessage.classList.remove(
                    "d-none"
                );


                reportReason.focus();

                return;

            }



            /*
            Later Django will:

            1. Verify the reporting member.

            2. Save:
               - Reporter
               - Reported Profile
               - Reason
               - Details
               - Date / Time

            3. Set report status:

               Pending

            4. Send the report to:

               admin-reports.html

            5. Admin may later change:

               Pending
                  ↓
               Under Review
                  ↓
               Resolved

            6. Admin decides whether:

               - No Violation Found
               - Warning
               - Suspension
               - Account Removal
               - Other justified action

            Important:

            A report does NOT automatically
            punish or suspend the member.

            Multiple reports also do not
            automatically punish a member.
            */



            const reportModalElement =
                document.getElementById(
                    "reportModal"
                );


            if (
                reportModalElement &&
                typeof bootstrap !== "undefined"
            ) {

                const reportModal =
                    bootstrap.Modal.getOrCreateInstance(
                        reportModalElement
                    );


                reportModal.hide();

            }



            showViewProfileMessage(
                "Your report has been submitted for admin review. Status: Pending.",
                "success"
            );


            submitReportBtn.disabled =
                true;


            submitReportBtn.textContent =
                "Report Submitted";


            console.log(
                "Report ready:",
                {
                    profileId,
                    reason:
                        reportReason.value,
                    details:
                        reportDetails.value.trim()
                }
            );

        }
    );

}



/* ================================
   Reset Report Modal
================================ */

const reportModalElement =
    document.getElementById(
        "reportModal"
    );


if (reportModalElement) {

    reportModalElement.addEventListener(
        "hidden.bs.modal",
        function() {

            const reportModalMessage =
                document.getElementById(
                    "reportModalMessage"
                );


            if (reportModalMessage) {

                reportModalMessage.textContent =
                    "";


                reportModalMessage.classList.add(
                    "d-none"
                );

            }

        }
    );

}

// ================================
// View Profile end
// ================================



// ================================
// KaiBandham Interests
// ================================

const interestCards =
    document.querySelectorAll(
        "[data-interest-card]"
    );



/* ================================
   RECEIVED INTERESTS
================================ */

interestCards.forEach(
    function(card) {

        const acceptButton =
            card.querySelector(
                ".accept-interest"
            );


        const declineButton =
            card.querySelector(
                ".decline-interest"
            );


        const statusMessage =
            card.querySelector(
                ".interest-status-message"
            );


        const messageArea =
            card.querySelector(
                ".accepted-message-area"
            );


        const profileId =
            card.dataset.profileId;



        // =========================
        // ACCEPT
        // =========================

        if (acceptButton) {

            acceptButton.addEventListener(
                "click",
                function() {

                    const confirmed =
                        confirm(
                            "Accept this marriage interest?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    // Status

                    if (statusMessage) {

                        statusMessage.textContent =
                            "Interest accepted. KaiBandham text messaging is now available.";

                        statusMessage.classList.remove(
                            "d-none",
                            "alert-danger",
                            "alert-secondary"
                        );

                        statusMessage.classList.add(
                            "alert-success"
                        );

                    }


                    // Accept Button

                    acceptButton.textContent =
                        "✓ Accepted";


                    acceptButton.disabled =
                        true;



                    // Disable Decline

                    if (declineButton) {

                        declineButton.disabled =
                            true;

                    }



                    // Show Messages

                    if (messageArea) {

                        messageArea.classList.remove(
                            "d-none"
                        );

                    }



                    /*
                    Later Django will:

                    1. Verify both accounts
                       are active.

                    2. Change the interest:

                       Pending
                         ↓
                       Accepted

                    3. Create or enable a
                       conversation between
                       the two members.

                    4. Enable KaiBandham
                       text messaging.

                    5. Create an
                       "Interest Accepted"
                       notification for
                       the sender.

                    6. Enforce:

                       15 TOTAL messages
                       per conversation.

                       This means both members'
                       messages combined.

                    7. After 15 total messages,
                       allow the WhatsApp
                       request feature if the
                       profile owner's privacy
                       settings permit it.

                    8. Do NOT automatically
                       reveal Personal WhatsApp.

                    9. Personal WhatsApp is
                       shown only after the
                       owner explicitly
                       approves the request.
                    */


                    console.log(
                        "Accepted interest:",
                        profileId
                    );

                }
            );

        }



        // =========================
        // DECLINE
        // =========================

        if (declineButton) {

            declineButton.addEventListener(
                "click",
                function() {

                    const confirmed =
                        confirm(
                            "Are you sure you want to decline this interest?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    // Status

                    if (statusMessage) {

                        statusMessage.textContent =
                            "Interest declined. This does not block, report or punish the member.";

                        statusMessage.classList.remove(
                            "d-none",
                            "alert-success",
                            "alert-danger"
                        );

                        statusMessage.classList.add(
                            "alert-secondary"
                        );

                    }



                    // Decline Button

                    declineButton.textContent =
                        "Declined";


                    declineButton.disabled =
                        true;



                    // Disable Accept

                    if (acceptButton) {

                        acceptButton.disabled =
                            true;

                    }



                    // No Messaging

                    if (messageArea) {

                        messageArea.classList.add(
                            "d-none"
                        );

                    }



                    /*
                    Later Django will:

                    1. Change the interest:

                       Pending
                         ↓
                       Declined

                    2. Do not create or
                       enable a conversation.

                    3. Do not allow messaging
                       from this interest.

                    Important:

                    Declining does NOT:

                    - Block the member
                    - Report the member
                    - Warn the member
                    - Suspend the member
                    - Penalize the member
                    - Affect reputation

                    It is only a personal
                    matrimony decision.
                    */


                    console.log(
                        "Declined interest:",
                        profileId
                    );

                }
            );

        }

    }
);



/* ================================
   SENT INTERESTS
================================ */

const sentInterestCards =
    document.querySelectorAll(
        "[data-sent-interest-card]"
    );


sentInterestCards.forEach(
    function(card) {

        const cancelButton =
            card.querySelector(
                ".cancel-interest"
            );


        const statusMessage =
            card.querySelector(
                ".sent-interest-status"
            );


        const pendingStatus =
            card.querySelector(
                ".pending-status"
            );


        const profileId =
            card.dataset.profileId;



        if (cancelButton) {

            cancelButton.addEventListener(
                "click",
                function() {

                    const confirmed =
                        confirm(
                            "Do you want to cancel this pending interest?"
                        );


                    if (!confirmed) {
                        return;
                    }



                    // Status Badge

                    if (pendingStatus) {

                        pendingStatus.textContent =
                            "Cancelled";

                    }



                    // Button

                    cancelButton.textContent =
                        "Interest Cancelled";


                    cancelButton.disabled =
                        true;



                    // Message

                    if (statusMessage) {

                        statusMessage.textContent =
                            "Your pending interest has been cancelled.";

                        statusMessage.classList.remove(
                            "d-none",
                            "alert-danger",
                            "alert-success"
                        );

                        statusMessage.classList.add(
                            "alert-secondary"
                        );

                    }



                    /*
                    Later Django will:

                    1. Verify the interest
                       is still Pending.

                    2. Change:

                       Pending
                         ↓
                       Cancelled

                    3. Prevent the receiving
                       member from accepting
                       the cancelled interest.

                    4. Do not block, report
                       or otherwise affect
                       either profile.
                    */


                    console.log(
                        "Cancelled interest:",
                        profileId
                    );

                }
            );

        }

    }
);

// ================================
// KaiBandham Interests end
// ================================


// ================================
// KaiBandham Messages
// ================================

const messageForm =
    document.getElementById(
        "messageForm"
    );


const messageInput =
    document.getElementById(
        "messageInput"
    );


const chatMessages =
    document.getElementById(
        "chatMessages"
    );


const messageCounter =
    document.getElementById(
        "messageCounter"
    );


const messageLimitStatus =
    document.getElementById(
        "messageLimitStatus"
    );


const contactRequestArea =
    document.getElementById(
        "contactRequestArea"
    );


const requestWhatsappBtn =
    document.getElementById(
        "requestWhatsappBtn"
    );


const whatsappRequestStatus =
    document.getElementById(
        "whatsappRequestStatus"
    );


const sendMessageBtn =
    document.getElementById(
        "sendMessageBtn"
    );



/*
Frontend demonstration only.

Later Django MUST calculate the real
conversation message count from the
database.

The limit is:

15 TOTAL messages per conversation.

This means messages from BOTH members
are counted together.
*/

let messageCount = 8;

const messageLimit = 15;



/* ================================
   Update Message Counter
================================ */

function updateMessageCounter() {

    if (messageCounter) {

        messageCounter.textContent =
            messageCount +
            " / " +
            messageLimit;

    }



    // Still Below Limit

    if (messageCount < messageLimit) {

        if (messageInput) {

            messageInput.disabled =
                false;

        }


        if (sendMessageBtn) {

            sendMessageBtn.disabled =
                false;

        }


        if (contactRequestArea) {

            contactRequestArea.classList.add(
                "d-none"
            );

        }


        if (messageLimitStatus) {

            const messagesRemaining =
                messageLimit -
                messageCount;


            messageLimitStatus.textContent =
                messagesRemaining +
                " message" +
                (
                    messagesRemaining === 1
                        ? ""
                        : "s"
                ) +
                " remaining in this conversation.";


            messageLimitStatus.classList.remove(
                "d-none"
            );

        }


        return;

    }



    // ================================
    // LIMIT REACHED
    // ================================

    if (messageInput) {

        messageInput.disabled =
            true;


        messageInput.placeholder =
            "15 total message limit reached.";

    }


    if (sendMessageBtn) {

        sendMessageBtn.disabled =
            true;

    }


    if (contactRequestArea) {

        contactRequestArea.classList.remove(
            "d-none"
        );

    }


    if (messageLimitStatus) {

        messageLimitStatus.textContent =
            "This conversation has reached the 15 total message limit. KaiBandham text messaging is now closed for this conversation.";


        messageLimitStatus.classList.remove(
            "d-none"
        );

    }

}



/* ================================
   Send Message
================================ */

if (
    messageForm &&
    messageInput &&
    chatMessages
) {

    messageForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();



            // Stop At Limit

            if (
                messageCount >=
                messageLimit
            ) {

                updateMessageCounter();

                return;

            }



            const message =
                messageInput.value.trim();



            // Empty Message

            if (message === "") {

                messageInput.focus();

                return;

            }



            // ================================
            // Create Frontend Message
            // ================================

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "message-row sent";



            const bubble =
                document.createElement(
                    "div"
                );


            bubble.className =
                "message-bubble";



            const text =
                document.createElement(
                    "p"
                );


            text.textContent =
                message;



            const time =
                document.createElement(
                    "span"
                );


            const now =
                new Date();


            time.textContent =
                now.toLocaleTimeString(
                    [],
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                );



            bubble.appendChild(
                text
            );


            bubble.appendChild(
                time
            );


            row.appendChild(
                bubble
            );


            chatMessages.appendChild(
                row
            );



            // ================================
            // Increase TOTAL Count
            // ================================

            messageCount++;


            updateMessageCounter();



            // Clear Input

            messageInput.value =
                "";



            // Scroll To Latest

            chatMessages.scrollTop =
                chatMessages.scrollHeight;



            /*
            Later Django will:

            1. Verify both accounts
               are active.

            2. Verify this interest
               is Accepted.

            3. Verify neither member
               has blocked the other.

            4. Count ALL messages in
               this conversation.

               Both members combined.

            5. If total messages >= 15:

               Do NOT save another
               KaiBandham chat message.

            6. If total messages < 15:

               Save the new message.

            7. Update the real message count.

            8. Send a visual notification
               to the receiving member.

            Important:

            The browser must NOT be trusted
            to enforce the real limit.

            Django must enforce it on
            the server.
            */

        }
    );

}



/* ================================
   Request Personal WhatsApp
================================ */

if (requestWhatsappBtn) {

    requestWhatsappBtn.addEventListener(
        "click",
        function() {

            if (
                messageCount <
                messageLimit
            ) {

                return;

            }



            const confirmed =
                confirm(
                    "Send a Personal WhatsApp request to this member?"
                );


            if (!confirmed) {

                return;

            }



            if (whatsappRequestStatus) {

                whatsappRequestStatus.textContent =
                    "Your WhatsApp request has been sent. The member must approve it before their Personal WhatsApp number can be shown.";


                whatsappRequestStatus.classList.remove(
                    "d-none"
                );

            }



            requestWhatsappBtn.textContent =
                "Request Sent";


            requestWhatsappBtn.disabled =
                true;



            /*
            Later Django will:

            1. Verify the interest is Accepted.

            2. Verify the conversation has
               reached 15 TOTAL messages.

            3. Verify the profile owner has:

               Allow WhatsApp Requests = ON

            4. Verify there is no existing:

               Pending request
               Approved request

            5. Create a WhatsApp request with:

               Status = Pending

            6. Send a notification to
               the profile owner.

            7. Do NOT reveal the Personal
               WhatsApp number.

            8. The owner can later:

               Approve
               or
               Decline

               from Notifications.

            9. If approved:

               Django can show
               approvedWhatsappContact.

            10. If declined:

                Django can show
                declinedWhatsappContact.

            Personal WhatsApp must NEVER
            be automatically revealed.
            */

        }
    );

}



/* ================================
   Frontend Initial State
================================ */

updateMessageCounter();

// ================================
// KaiBandham Messages end
// ================================


// ================================
// KaiBandham Privacy Settings
// ================================

const privacyForm =
    document.getElementById(
        "privacyForm"
    );

if (privacyForm) {

    privacyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const message =
                document.getElementById(
                    "privacyMessage"
                );

            if (message) {

                message.textContent =
                    "Privacy settings saved.";

                message.className =
                    "alert alert-success";

            }

            /*
            Later Django will:

            1. Verify the logged-in member.

            2. Validate and save all privacy
               settings on the server.

            3. Apply the new privacy rules
               immediately where appropriate.

            4. Never rely on JavaScript alone
               to protect private contact data.
            */

        }
    );

}



// ================================
// KaiBandham Notifications
// ================================

const markAllReadBtn =
    document.getElementById(
        "markAllReadBtn"
    );


const notificationCards =
    document.querySelectorAll(
        ".notification-card"
    );


const filterButtons =
    document.querySelectorAll(
        ".notification-filter-btn"
    );


const notificationCount =
    document.querySelector(
        ".notification-count"
    );


const notificationEmptyState =
    document.getElementById(
        "notificationEmptyState"
    );



/* ================================
   Update Notification Count
================================ */

function updateNotificationCount() {

    const unreadCards =
        document.querySelectorAll(
            ".notification-card.unread"
        );


    if (!notificationCount) {
        return;
    }


    notificationCount.textContent =
        unreadCards.length;


    if (unreadCards.length === 0) {

        notificationCount.classList.add(
            "d-none"
        );

    } else {

        notificationCount.classList.remove(
            "d-none"
        );

    }

}



/* ================================
   Mark Notification Read
================================ */

function markNotificationRead(card) {

    if (!card) {
        return;
    }


    card.classList.remove(
        "unread"
    );


    const dot =
        card.querySelector(
            ".unread-dot"
        );


    if (dot) {
        dot.remove();
    }


    updateNotificationCount();

}



/* ================================
   Mark All as Read
================================ */

if (markAllReadBtn) {

    markAllReadBtn.addEventListener(
        "click",
        function() {

            notificationCards.forEach(
                function(card) {

                    markNotificationRead(
                        card
                    );

                }
            );


            markAllReadBtn.textContent =
                "All Notifications Read";


            markAllReadBtn.disabled =
                true;



            /*
            Later Django will:

            - Mark all current user's
              notifications as read.

            - Store the state in
              the database.

            - Return the real unread count.
            */

        }
    );

}



/* ================================
   Notification Filters
================================ */

filterButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const filter =
                    button.dataset.filter;


                let visibleCount = 0;



                // Remove active state

                filterButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );



                // Activate selected filter

                button.classList.add(
                    "active"
                );



                // Filter cards

                notificationCards.forEach(
                    function(card) {

                        const shouldShow =
                            filter === "all" ||
                            card.dataset.type ===
                            filter;


                        if (shouldShow) {

                            card.style.display =
                                "flex";


                            visibleCount++;

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );



                // Empty State

                if (notificationEmptyState) {

                    if (visibleCount === 0) {

                        notificationEmptyState
                            .classList.remove(
                                "d-none"
                            );

                    } else {

                        notificationEmptyState
                            .classList.add(
                                "d-none"
                            );

                    }

                }

            }
        );

    }
);



/* ================================
   WhatsApp Contact Requests
================================ */

const whatsappRequestCards =
    document.querySelectorAll(
        "[data-whatsapp-request]"
    );


whatsappRequestCards.forEach(
    function(notificationCard) {

        const approveButton =
            notificationCard.querySelector(
                ".approve-contact"
            );


        const declineButton =
            notificationCard.querySelector(
                ".decline-contact"
            );


        const actions =
            notificationCard.querySelector(
                ".whatsapp-request-actions"
            );


        const decisionMessage =
            notificationCard.querySelector(
                ".whatsapp-decision-message"
            );


        const requestId =
            notificationCard.dataset.requestId;


        const profileId =
            notificationCard.dataset.profileId;



        /* ================================
           APPROVE
        ================================ */

        if (approveButton) {

            approveButton.addEventListener(
                "click",
                function() {

                    const confirmed =
                        confirm(
                            "Approve this member's Personal WhatsApp request?"
                        );


                    if (!confirmed) {
                        return;
                    }



                    approveButton.textContent =
                        "✓ Approved";


                    approveButton.disabled =
                        true;



                    if (declineButton) {

                        declineButton.disabled =
                            true;

                    }



                    if (decisionMessage) {

                        decisionMessage.textContent =
                            "WhatsApp request approved. Your Personal WhatsApp number can now be shown only to this requesting member.";


                        decisionMessage.classList.remove(
                            "d-none",
                            "alert-danger",
                            "alert-info",
                            "alert-secondary"
                        );


                        decisionMessage.classList.add(
                            "alert-success"
                        );

                    }



                    if (actions) {

                        actions.setAttribute(
                            "aria-label",
                            "WhatsApp request approved"
                        );

                    }



                    markNotificationRead(
                        notificationCard
                    );



                    /*
                    Later Django will:

                    1. Verify the logged-in user
                       owns this WhatsApp request.

                    2. Verify request status is:

                       Pending

                    3. Verify this request was
                       created after the accepted
                       conversation reached:

                       15 TOTAL messages.

                    4. Change:

                       Pending
                          ↓
                       Approved

                    5. Share ONLY the owner's
                       Personal WhatsApp number
                       with the requesting member.

                    6. Do not make the number
                       public or searchable.

                    7. Create a notification for
                       the requester:

                       "WhatsApp Request Approved"

                    8. messages.html can then
                       display the approved number.

                    Important:

                    Approval is explicit.
                    KaiBandham must NEVER reveal
                    Personal WhatsApp automatically.
                    */


                    console.log(
                        "WhatsApp approved:",
                        {
                            requestId,
                            profileId
                        }
                    );

                }
            );

        }



        /* ================================
           DECLINE
        ================================ */

        if (declineButton) {

            declineButton.addEventListener(
                "click",
                function() {

                    const confirmed =
                        confirm(
                            "Decline this Personal WhatsApp request?"
                        );


                    if (!confirmed) {
                        return;
                    }



                    declineButton.textContent =
                        "Declined";


                    declineButton.disabled =
                        true;



                    if (approveButton) {

                        approveButton.disabled =
                            true;

                    }



                    if (decisionMessage) {

                        decisionMessage.textContent =
                            "WhatsApp request declined. Your Personal WhatsApp number remains hidden.";


                        decisionMessage.classList.remove(
                            "d-none",
                            "alert-success",
                            "alert-danger",
                            "alert-info"
                        );


                        decisionMessage.classList.add(
                            "alert-secondary"
                        );

                    }



                    markNotificationRead(
                        notificationCard
                    );



                    /*
                    Later Django will:

                    1. Verify the logged-in user
                       owns this request.

                    2. Change:

                       Pending
                          ↓
                       Declined

                    3. Keep the Personal
                       WhatsApp number hidden.

                    4. Create a notification
                       for the requesting member:

                       "WhatsApp Request Declined"

                    5. Declining the request
                       does NOT block, report
                       or punish the requester.
                    */


                    console.log(
                        "WhatsApp declined:",
                        {
                            requestId,
                            profileId
                        }
                    );

                }
            );

        }

    }
);



/* ================================
   Mark Card Read When Link Clicked
================================ */

notificationCards.forEach(
    function(card) {

        const links =
            card.querySelectorAll(
                "a"
            );


        links.forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        markNotificationRead(
                            card
                        );

                    }
                );

            }
        );

    }
);



/* ================================
   Initial Count
================================ */

updateNotificationCount();

// ================================
// KaiBandham Notifications end
// ================================



// ================================
// KaiBandham Administrator Pages
// ================================

// ================================
// KaiBandham Admin Dashboard
// ================================

const pendingProfileRows =
    document.querySelectorAll(
        "[data-pending-profile]"
    );

const pendingProfileCount =
    document.getElementById(
        "pendingProfileCount"
    );

const noPendingProfiles =
    document.getElementById(
        "noPendingProfiles"
    );

const changesRequiredModal =
    document.getElementById(
        "changesRequiredModal"
    );

const saveChangesRequiredBtn =
    document.getElementById(
        "saveChangesRequiredBtn"
    );

const profileChangesReason =
    document.getElementById(
        "profileChangesReason"
    );

const changesRequiredMessage =
    document.getElementById(
        "changesRequiredMessage"
    );


let currentApprovalRow = null;



/* ================================
   Pending Profile Count
================================ */

function updatePendingProfileCount() {

    let pendingCount = 0;


    pendingProfileRows.forEach(
        function(row) {

            if (
                row.dataset.status ===
                "pending"
            ) {

                pendingCount++;

            }

        }
    );


    if (pendingProfileCount) {

        pendingProfileCount.textContent =
            pendingCount;

    }


    if (noPendingProfiles) {

        if (pendingCount === 0) {

            noPendingProfiles.classList.remove(
                "d-none"
            );

        } else {

            noPendingProfiles.classList.add(
                "d-none"
            );

        }

    }

}



/* ================================
   Update Profile Approval Status
================================ */

function updateProfileApprovalStatus(
    row,
    status
) {

    if (!row) {
        return;
    }


    row.dataset.status =
        status;


    const statusBadge =
        row.querySelector(
            ".profile-approval-status"
        );

    const approveButton =
        row.querySelector(
            ".approve-profile"
        );

    const changesButton =
        row.querySelector(
            ".changes-required-profile"
        );


    if (statusBadge) {

        statusBadge.classList.remove(
            "pending",
            "active",
            "approved",
            "review",
            "changes-required"
        );


        if (status === "approved") {

            statusBadge.textContent =
                "Approved";

            statusBadge.classList.add(
                "active"
            );

        }


        if (
            status ===
            "changes-required"
        ) {

            statusBadge.textContent =
                "Changes Required";

            statusBadge.classList.add(
                "review"
            );

        }

    }


    if (approveButton) {

        approveButton.disabled =
            true;


        if (status === "approved") {

            approveButton.textContent =
                "✓ Approved";

        }

    }


    if (changesButton) {

        changesButton.disabled =
            true;


        if (
            status ===
            "changes-required"
        ) {

            changesButton.textContent =
                "Changes Requested";

        }

    }


    updatePendingProfileCount();

}



/* ================================
   Approve Profile
================================ */

document
    .querySelectorAll(
        ".approve-profile"
    )
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const row =
                        button.closest(
                            "[data-pending-profile]"
                        );


                    if (!row) {
                        return;
                    }


                    const profileName =
                        row.dataset.profileName;

                    const profileId =
                        row.dataset.profileId;


                    const confirmed =
                        confirm(
                            "Approve " +
                            profileName +
                            " (" +
                            profileId +
                            ") and make the profile visible to members?"
                        );


                    if (!confirmed) {

                        return;

                    }


                    updateProfileApprovalStatus(
                        row,
                        "approved"
                    );


                    /*
                    Later Django will:

                    1. Save profile approval
                       status = "Approved".

                    2. Save:
                       - Admin ID
                       - Approval date/time

                    3. Make the profile visible
                       according to the member's
                       profile visibility settings.

                    4. Update profile-status.html.

                    5. Create a visual notification:
                       "Profile Approved".
                    */

                }
            );

        }
    );



/* ================================
   Open Changes Required Modal
================================ */

document
    .querySelectorAll(
        ".changes-required-profile"
    )
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    currentApprovalRow =
                        button.closest(
                            "[data-pending-profile]"
                        );


                    if (!currentApprovalRow) {
                        return;
                    }


                    const profileName =
                        currentApprovalRow
                            .dataset.profileName;

                    const profileId =
                        currentApprovalRow
                            .dataset.profileId;


                    const nameElement =
                        document.getElementById(
                            "changesProfileName"
                        );

                    const idElement =
                        document.getElementById(
                            "changesProfileId"
                        );


                    if (nameElement) {

                        nameElement.textContent =
                            profileName;

                    }


                    if (idElement) {

                        idElement.textContent =
                            "Profile ID: " +
                            profileId;

                    }


                    if (profileChangesReason) {

                        profileChangesReason.value =
                            "";

                    }


                    if (changesRequiredMessage) {

                        changesRequiredMessage
                            .classList.add(
                                "d-none"
                            );

                    }

                }
            );

        }
    );



/* ================================
   Save Changes Required
================================ */

if (saveChangesRequiredBtn) {

    saveChangesRequiredBtn.addEventListener(
        "click",
        function() {

            if (
                !currentApprovalRow ||
                !profileChangesReason
            ) {

                return;

            }


            const reason =
                profileChangesReason.value
                    .trim();


            if (reason === "") {

                if (
                    changesRequiredMessage
                ) {

                    changesRequiredMessage
                        .textContent =
                            "Please explain what the member needs to change.";

                    changesRequiredMessage
                        .classList.remove(
                            "d-none"
                        );

                }


                profileChangesReason.focus();

                return;

            }


            const confirmed =
                confirm(
                    "Send this changes-required message to the member?"
                );


            if (!confirmed) {

                return;

            }


            updateProfileApprovalStatus(
                currentApprovalRow,
                "changes-required"
            );


            /*
            Later Django will:

            1. Save profile status as:
               "Changes Required".

            2. Save the admin's reason.

            3. Save:
               - Admin ID
               - Review date/time

            4. Keep the profile hidden.

            5. Show the reason on
               profile-status.html.

            6. Create a visual notification:
               "Profile Changes Required".
            */


            if (
                changesRequiredModal &&
                typeof bootstrap !== "undefined"
            ) {

                const modal =
                    bootstrap.Modal.getInstance(
                        changesRequiredModal
                    );

                if (modal) {

                    modal.hide();

                }

            }


            currentApprovalRow =
                null;

        }
    );

}



/* ================================
   Initial Dashboard
================================ */

updatePendingProfileCount();

// ================================
// KaiBandham Admin Dashboard end
// ================================

// ================================================================================================


// ================================
// KaiBandham Admin Reports
// ================================


function confirmAdminAction(message) {

    return confirm(message);

}



/* ================================
   ELEMENTS
================================ */

const reportSearch =
    document.getElementById(
        "reportSearch"
    );

const reportStatus =
    document.getElementById(
        "reportStatus"
    );

const reportReasonFilter =
    document.getElementById(
        "reportReasonFilter"
    );

const reportRows =
    document.querySelectorAll(
        "[data-report-row]"
    );

const noReportsMessage =
    document.getElementById(
        "noReportsMessage"
    );

const reportReviewModal =
    document.getElementById(
        "reportReviewModal"
    );

const adminReportNotes =
    document.getElementById(
        "adminReportNotes"
    );

const adminReportActionMessage =
    document.getElementById(
        "adminReportActionMessage"
    );


let currentReportRow = null;

let currentReportButton = null;



/* ================================
   REPORT FILTERS
================================ */

function filterAdminReports() {

    const searchValue =
        reportSearch
            ? reportSearch.value
                .trim()
                .toLowerCase()
            : "";

    const selectedStatus =
        reportStatus
            ? reportStatus.value
            : "all";

    const selectedReason =
        reportReasonFilter
            ? reportReasonFilter.value
            : "all";


    let visibleReports = 0;


    reportRows.forEach(
        function(row) {

            const reportId =
                row.dataset.reportId
                    .toLowerCase();

            const profileId =
                row.dataset.profileId
                    .toLowerCase();

            const reportedBy =
                row.dataset.reportedBy
                    .toLowerCase();

            const rowStatus =
                row.dataset.status;

            const rowReason =
                row.dataset.reason;


            const matchesSearch =
                reportId.includes(searchValue) ||
                profileId.includes(searchValue) ||
                reportedBy.includes(searchValue);


            const matchesStatus =
                selectedStatus === "all" ||
                rowStatus === selectedStatus;


            const matchesReason =
                selectedReason === "all" ||
                rowReason === selectedReason;


            if (
                matchesSearch &&
                matchesStatus &&
                matchesReason
            ) {

                row.style.display = "";

                visibleReports++;

            } else {

                row.style.display = "none";

            }

        }
    );


    if (noReportsMessage) {

        if (visibleReports === 0) {

            noReportsMessage.classList.remove(
                "d-none"
            );

        } else {

            noReportsMessage.classList.add(
                "d-none"
            );

        }

    }

}



if (reportSearch) {

    reportSearch.addEventListener(
        "input",
        filterAdminReports
    );

}


if (reportStatus) {

    reportStatus.addEventListener(
        "change",
        filterAdminReports
    );

}


if (reportReasonFilter) {

    reportReasonFilter.addEventListener(
        "change",
        filterAdminReports
    );

}



/* ================================
   OPEN REPORT MODAL
================================ */

if (reportReviewModal) {

    reportReviewModal.addEventListener(
        "show.bs.modal",
        function(event) {

            const button =
                event.relatedTarget;


            if (!button) {
                return;
            }


            currentReportButton =
                button;

            currentReportRow =
                button.closest(
                    "[data-report-row]"
                );


            const reportId =
                button.dataset.reportId;

            const profileId =
                button.dataset.profileId;

            const profileName =
                button.dataset.profileName;

            const profileLocation =
                button.dataset.profileLocation;

            const reportedBy =
                button.dataset.reportedBy;

            const reason =
                button.dataset.reasonLabel;

            const reportDate =
                button.dataset.reportDate;

            const comment =
                button.dataset.comment;

            const status =
                currentReportRow
                    ? currentReportRow.dataset.status
                    : button.dataset.status;


            document.getElementById(
                "reportReviewModalLabel"
            ).textContent =
                "Review Report " + reportId;


            document.getElementById(
                "modalReportId"
            ).textContent =
                reportId;


            document.getElementById(
                "modalReportedProfile"
            ).textContent =
                profileId;


            document.getElementById(
                "modalReportedBy"
            ).textContent =
                reportedBy;


            document.getElementById(
                "modalReportReason"
            ).textContent =
                reason;


            document.getElementById(
                "modalReportDate"
            ).textContent =
                reportDate;


            document.getElementById(
                "modalReportComment"
            ).textContent =
                comment;


            document.getElementById(
                "modalProfileName"
            ).textContent =
                profileName;


            document.getElementById(
                "modalProfileId"
            ).textContent =
                "Profile ID: " + profileId;


            document.getElementById(
                "modalProfileLocation"
            ).textContent =
                profileLocation;


            if (adminReportNotes) {

                adminReportNotes.value = "";

            }


            hideAdminReportMessage();


            updateModalReportStatus(
                status
            );


            updateAdminActionButtons(
                status
            );

        }
    );

}



/* ================================
   MODAL STATUS
================================ */

function updateModalReportStatus(status) {

    const modalStatus =
        document.getElementById(
            "modalReportStatus"
        );


    if (!modalStatus) {
        return;
    }


    modalStatus.classList.remove(
        "pending",
        "review",
        "resolved"
    );


    if (status === "pending") {

        modalStatus.textContent =
            "Pending";

        modalStatus.classList.add(
            "pending"
        );

    }


    if (status === "review") {

        modalStatus.textContent =
            "Under Review";

        modalStatus.classList.add(
            "review"
        );

    }


    if (status === "resolved") {

        modalStatus.textContent =
            "Resolved";

        modalStatus.classList.add(
            "resolved"
        );

    }

}



/* ================================
   UPDATE TABLE STATUS
================================ */

function updateCurrentReportStatus(
    status
) {

    if (!currentReportRow) {
        return;
    }


    currentReportRow.dataset.status =
        status;


    const statusBadge =
        currentReportRow.querySelector(
            ".admin-status"
        );


    if (statusBadge) {

        statusBadge.classList.remove(
            "pending",
            "review",
            "resolved"
        );


        if (status === "pending") {

            statusBadge.textContent =
                "Pending";

            statusBadge.classList.add(
                "pending"
            );

        }


        if (status === "review") {

            statusBadge.textContent =
                "Under Review";

            statusBadge.classList.add(
                "review"
            );

        }


        if (status === "resolved") {

            statusBadge.textContent =
                "Resolved";

            statusBadge.classList.add(
                "resolved"
            );

        }

    }


    updateModalReportStatus(
        status
    );


    updateAdminActionButtons(
        status
    );


    if (currentReportButton) {

        currentReportButton.dataset.status =
            status;


        if (status === "review") {

            currentReportButton.textContent =
                "Continue Review";

            currentReportButton.classList.remove(
                "btn-brand",
                "btn-outline-secondary"
            );

            currentReportButton.classList.add(
                "btn-outline-brand"
            );

        }


        if (status === "resolved") {

            currentReportButton.textContent =
                "View";

            currentReportButton.classList.remove(
                "btn-brand",
                "btn-outline-brand"
            );

            currentReportButton.classList.add(
                "btn-outline-secondary"
            );

        }

    }


    filterAdminReports();

}



/* ================================
   ADMIN ACTION BUTTON STATE
================================ */

function updateAdminActionButtons(
    status
) {

    const startReviewBtn =
        document.getElementById(
            "startReviewBtn"
        );

    const closeNoViolationBtn =
        document.getElementById(
            "closeNoViolationBtn"
        );

    const warnUserBtn =
        document.getElementById(
            "warnUserBtn"
        );

    const suspendBtn =
        document.getElementById(
            "suspendReportedUserBtn"
        );

    const removeBtn =
        document.getElementById(
            "removeReportedUserBtn"
        );

    const resolveBtn =
        document.getElementById(
            "resolveReportBtn"
        );


    const isResolved =
        status === "resolved";


    if (startReviewBtn) {

        startReviewBtn.disabled =
            status !== "pending";

    }


    if (closeNoViolationBtn) {

        closeNoViolationBtn.disabled =
            isResolved;

    }


    if (warnUserBtn) {

        warnUserBtn.disabled =
            isResolved;

    }


    if (suspendBtn) {

        suspendBtn.disabled =
            isResolved;

    }


    if (removeBtn) {

        removeBtn.disabled =
            isResolved;

    }


    if (resolveBtn) {

        resolveBtn.disabled =
            isResolved;

    }


    if (adminReportNotes) {

        adminReportNotes.disabled =
            isResolved;

    }

}



/* ================================
   ADMIN NOTES VALIDATION
================================ */

function adminNotesAvailable() {

    if (!adminReportNotes) {
        return true;
    }


    if (
        adminReportNotes.value
            .trim() === ""
    ) {

        showAdminReportMessage(
            "Please add a short admin review note before taking this action.",
            "warning"
        );

        adminReportNotes.focus();

        return false;

    }


    return true;

}



/* ================================
   ACTION MESSAGE
================================ */

function showAdminReportMessage(
    text,
    type
) {

    if (!adminReportActionMessage) {
        return;
    }


    adminReportActionMessage.textContent =
        text;


    adminReportActionMessage.classList.remove(
        "d-none",
        "alert-success",
        "alert-danger",
        "alert-warning",
        "alert-info",
        "alert-secondary"
    );


    adminReportActionMessage.classList.add(
        "alert-" + type
    );

}


function hideAdminReportMessage() {

    if (adminReportActionMessage) {

        adminReportActionMessage.classList.add(
            "d-none"
        );

    }

}



/* ================================
   START REVIEW
================================ */

const startReviewBtn =
    document.getElementById(
        "startReviewBtn"
    );


if (startReviewBtn) {

    startReviewBtn.addEventListener(
        "click",
        function() {

            if (
                !confirmAdminAction(
                    "Start reviewing this report?"
                )
            ) {

                return;

            }


            updateCurrentReportStatus(
                "review"
            );


            showAdminReportMessage(
                "Report is now under review.",
                "info"
            );


            /*
            Later Django will save:

            report.status = "Under Review"

            and store the admin
            review start time.
            */

        }
    );

}



/* ================================
   CLOSE — NO VIOLATION FOUND
================================ */

const closeNoViolationBtn =
    document.getElementById(
        "closeNoViolationBtn"
    );


if (closeNoViolationBtn) {

    closeNoViolationBtn.addEventListener(
        "click",
        function() {

            if (!adminNotesAvailable()) {

                return;

            }


            if (
                !confirmAdminAction(
                    "Close this report with no violation found?"
                )
            ) {

                return;

            }


            updateCurrentReportStatus(
                "resolved"
            );


            showAdminReportMessage(
                "Report closed. No violation was found and no account punishment was applied.",
                "success"
            );


            /*
            Later Django will:

            1. Save report as Resolved.
            2. Save outcome:
               "No Violation Found".
            3. Save admin notes.
            4. Apply no warning,
               suspension or removal.
            5. Update the reporting
               member's report-history.html.
            */

        }
    );

}



/* ================================
   WARN MEMBER
================================ */

const warnUserBtn =
    document.getElementById(
        "warnUserBtn"
    );


if (warnUserBtn) {

    warnUserBtn.addEventListener(
        "click",
        function() {

            if (!adminNotesAvailable()) {

                return;

            }


            if (
                !confirmAdminAction(
                    "Send an official warning to this member?"
                )
            ) {

                return;

            }


            if (
                currentReportRow &&
                currentReportRow.dataset.status === "pending"
            ) {

                updateCurrentReportStatus(
                    "review"
                );

            }


            showAdminReportMessage(
                "Warning recorded. The report remains under review until you mark it resolved.",
                "warning"
            );


            /*
            Later Django will:

            1. Save the admin notes.
            2. Record the warning.
            3. Notify the member.
            4. Keep the report
               Under Review until resolved.
            */

        }
    );

}



/* ================================
   SUSPEND ACCOUNT
================================ */

const suspendReportedUserBtn =
    document.getElementById(
        "suspendReportedUserBtn"
    );


if (suspendReportedUserBtn) {

    suspendReportedUserBtn.addEventListener(
        "click",
        function() {

            if (!adminNotesAvailable()) {

                return;

            }


            if (
                !confirmAdminAction(
                    "Suspend this account after reviewing the report?"
                )
            ) {

                return;

            }


            if (
                currentReportRow &&
                currentReportRow.dataset.status === "pending"
            ) {

                updateCurrentReportStatus(
                    "review"
                );

            }


            showAdminReportMessage(
                "Account suspension recorded. Mark the report resolved when the review is complete.",
                "danger"
            );


            /*
            Later Django will:

            1. Save admin notes.
            2. Suspend the account.
            3. Record who performed
               the admin action.
            4. Record the action date.
            5. Notify the affected member.
            */

        }
    );

}



/* ================================
   REMOVE ACCOUNT
================================ */

const removeReportedUserBtn =
    document.getElementById(
        "removeReportedUserBtn"
    );


if (removeReportedUserBtn) {

    removeReportedUserBtn.addEventListener(
        "click",
        function() {

            if (!adminNotesAvailable()) {

                return;

            }


            if (
                !confirmAdminAction(
                    "Permanently remove this account after reviewing the evidence?"
                )
            ) {

                return;

            }


            if (
                currentReportRow &&
                currentReportRow.dataset.status === "pending"
            ) {

                updateCurrentReportStatus(
                    "review"
                );

            }


            showAdminReportMessage(
                "Account removal action recorded. Mark the report resolved when the case is complete.",
                "danger"
            );


            /*
            Later Django will:

            1. Save admin notes.
            2. Record the removal reason.
            3. Disable or remove the account.
            4. Keep an admin audit record.
            5. Notify the affected member
               if appropriate.
            */

        }
    );

}



/* ================================
   MARK REPORT RESOLVED
================================ */

const resolveReportBtn =
    document.getElementById(
        "resolveReportBtn"
    );


if (resolveReportBtn) {

    resolveReportBtn.addEventListener(
        "click",
        function() {

            if (!adminNotesAvailable()) {

                return;

            }


            if (
                !confirmAdminAction(
                    "Mark this report as resolved?"
                )
            ) {

                return;

            }


            updateCurrentReportStatus(
                "resolved"
            );


            showAdminReportMessage(
                "Report marked as resolved.",
                "success"
            );


            /*
            Later Django will:

            1. Save report.status
               as "Resolved".

            2. Save admin notes.

            3. Save the final
               admin decision.

            4. Update the reporting
               member's report history.

            5. Create a visual
               notification:
               "Report Status Updated".
            */

        }
    );

}

// ================================
// KaiBandham Admin Reports end
// ================================



// ================================
// KaiBandham Admin Users
// ================================


const adminUserSearch =
    document.getElementById(
        "adminUserSearch"
    );

const adminDistrictFilter =
    document.getElementById(
        "adminDistrictFilter"
    );

const adminStatusFilter =
    document.getElementById(
        "adminStatusFilter"
    );

const adminCommunicationFilter =
    document.getElementById(
        "adminCommunicationFilter"
    );

const adminUserRows =
    document.querySelectorAll(
        "[data-user-row]"
    );

const noAdminUsersMessage =
    document.getElementById(
        "noAdminUsersMessage"
    );

const adminUserActionMessage =
    document.getElementById(
        "adminUserActionMessage"
    );


let selectedAdminUserRow = null;



// ================================
// User Counts
// ================================

function updateAdminUserCounts() {

    let activeCount = 0;
    let suspendedCount = 0;


    adminUserRows.forEach(
        function(row) {

            if (
                row.dataset.status ===
                "active"
            ) {

                activeCount++;

            }


            if (
                row.dataset.status ===
                "suspended"
            ) {

                suspendedCount++;

            }

        }
    );


    const activeUserCount =
        document.getElementById(
            "activeUserCount"
        );

    const suspendedUserCount =
        document.getElementById(
            "suspendedUserCount"
        );


    if (activeUserCount) {

        activeUserCount.textContent =
            activeCount;

    }


    if (suspendedUserCount) {

        suspendedUserCount.textContent =
            suspendedCount;

    }

}



// ================================
// User Filters
// ================================

function filterAdminUsers() {

    const searchValue =
        adminUserSearch
            ? adminUserSearch.value
                .trim()
                .toLowerCase()
            : "";


    const districtValue =
        adminDistrictFilter
            ? adminDistrictFilter.value
            : "all";


    const statusValue =
        adminStatusFilter
            ? adminStatusFilter.value
            : "all";


    const communicationValue =
        adminCommunicationFilter
            ? adminCommunicationFilter.value
            : "all";


    let visibleUsers = 0;


    adminUserRows.forEach(
        function(row) {

            const name =
                row.dataset.userName
                    .toLowerCase();

            const profileId =
                row.dataset.profileId
                    .toLowerCase();

            const district =
                row.dataset.district;

            const status =
                row.dataset.status;

            const communication =
                row.dataset.communication;


            const matchesSearch =
                name.includes(searchValue) ||
                profileId.includes(searchValue);


            const matchesDistrict =
                districtValue === "all" ||
                district === districtValue;


            const matchesStatus =
                statusValue === "all" ||
                status === statusValue;


            const matchesCommunication =
                communicationValue === "all" ||
                communication ===
                    communicationValue;


            if (
                matchesSearch &&
                matchesDistrict &&
                matchesStatus &&
                matchesCommunication
            ) {

                row.style.display = "";

                visibleUsers++;

            } else {

                row.style.display =
                    "none";

            }

        }
    );


    if (noAdminUsersMessage) {

        if (visibleUsers === 0) {

            noAdminUsersMessage
                .classList.remove(
                    "d-none"
                );

        } else {

            noAdminUsersMessage
                .classList.add(
                    "d-none"
                );

        }

    }


    const visibleUserCount =
        document.getElementById(
            "visibleUserCount"
        );


    if (visibleUserCount) {

        visibleUserCount.textContent =
            visibleUsers;

    }

}



if (adminUserSearch) {

    adminUserSearch.addEventListener(
        "input",
        filterAdminUsers
    );

}


if (adminDistrictFilter) {

    adminDistrictFilter.addEventListener(
        "change",
        filterAdminUsers
    );

}


if (adminStatusFilter) {

    adminStatusFilter.addEventListener(
        "change",
        filterAdminUsers
    );

}


if (adminCommunicationFilter) {

    adminCommunicationFilter.addEventListener(
        "change",
        filterAdminUsers
    );

}



// ================================
// Admin Message
// ================================

function showAdminUserMessage(
    text,
    type
) {

    if (!adminUserActionMessage) {
        return;
    }


    adminUserActionMessage.textContent =
        text;


    adminUserActionMessage.classList.remove(
        "d-none",
        "alert-success",
        "alert-warning",
        "alert-danger",
        "alert-info"
    );


    adminUserActionMessage.classList.add(
        "alert-" + type
    );

}



// ================================
// Update User Status
// ================================

function updateAdminUserStatus(
    row,
    newStatus
) {

    if (!row) {
        return;
    }


    row.dataset.status =
        newStatus;


    const statusBadge =
        row.querySelector(
            ".admin-status"
        );

    const suspendButton =
        row.querySelector(
            ".suspend-user"
        );

    const reactivateButton =
        row.querySelector(
            ".reactivate-user"
        );

    const removeButton =
        row.querySelector(
            ".remove-user"
        );


    if (statusBadge) {

        statusBadge.classList.remove(
            "active",
            "suspended",
            "removed"
        );


        if (newStatus === "active") {

            statusBadge.textContent =
                "Active";

            statusBadge.classList.add(
                "active"
            );

        }


        if (newStatus === "suspended") {

            statusBadge.textContent =
                "Suspended";

            statusBadge.classList.add(
                "suspended"
            );

        }


        if (newStatus === "removed") {

            statusBadge.textContent =
                "Removed";

            statusBadge.classList.add(
                "removed"
            );

        }

    }



    // Active account

    if (newStatus === "active") {

        if (suspendButton) {

            suspendButton.classList.remove(
                "d-none"
            );

            suspendButton.disabled =
                false;

        }


        if (reactivateButton) {

            reactivateButton.classList.add(
                "d-none"
            );

        }


        if (removeButton) {

            removeButton.disabled =
                false;

        }

    }



    // Suspended account

    if (newStatus === "suspended") {

        if (suspendButton) {

            suspendButton.classList.add(
                "d-none"
            );

        }


        if (reactivateButton) {

            reactivateButton.classList.remove(
                "d-none"
            );

            reactivateButton.disabled =
                false;

        }


        if (removeButton) {

            removeButton.disabled =
                false;

        }

    }



    // Removed account

    if (newStatus === "removed") {

        if (suspendButton) {

            suspendButton.classList.add(
                "d-none"
            );

        }


        if (reactivateButton) {

            reactivateButton.classList.add(
                "d-none"
            );

        }


        if (removeButton) {

            removeButton.disabled =
                true;

            removeButton.textContent =
                "Removed";

        }

    }


    updateAdminUserCounts();

    filterAdminUsers();

}



// ================================
// Suspend User
// ================================

const suspendUserModalElement =
    document.getElementById(
        "suspendUserModal"
    );


document
    .querySelectorAll(
        ".suspend-user"
    )
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    selectedAdminUserRow =
                        button.closest(
                            "[data-user-row]"
                        );


                    if (
                        !selectedAdminUserRow ||
                        !suspendUserModalElement
                    ) {

                        return;

                    }


                    const name =
                        selectedAdminUserRow
                            .dataset.userName;

                    const profileId =
                        selectedAdminUserRow
                            .dataset.profileId;


                    document.getElementById(
                        "suspendUserName"
                    ).textContent =
                        name;


                    document.getElementById(
                        "suspendUserProfileId"
                    ).textContent =
                        "Profile ID: " +
                        profileId;


                    document.getElementById(
                        "suspendReason"
                    ).value = "";


                    document.getElementById(
                        "suspendAdminNote"
                    ).value = "";


                    document.getElementById(
                        "suspendUserMessage"
                    ).classList.add(
                        "d-none"
                    );


                    const modal =
                        bootstrap.Modal
                            .getOrCreateInstance(
                                suspendUserModalElement
                            );


                    modal.show();

                }
            );

        }
    );



const confirmSuspendUser =
    document.getElementById(
        "confirmSuspendUser"
    );


if (confirmSuspendUser) {

    confirmSuspendUser.addEventListener(
        "click",
        function() {

            if (!selectedAdminUserRow) {
                return;
            }


            const reason =
                document.getElementById(
                    "suspendReason"
                ).value;


            const note =
                document.getElementById(
                    "suspendAdminNote"
                ).value.trim();


            const message =
                document.getElementById(
                    "suspendUserMessage"
                );


            if (reason === "") {

                message.textContent =
                    "Please select a suspension reason.";

                message.classList.remove(
                    "d-none"
                );

                return;

            }


            if (note === "") {

                message.textContent =
                    "Please add an admin note explaining the suspension.";

                message.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "suspendAdminNote"
                ).focus();

                return;

            }


            const profileId =
                selectedAdminUserRow
                    .dataset.profileId;


            const confirmed =
                confirm(
                    "Suspend account " +
                    profileId +
                    "?"
                );


            if (!confirmed) {
                return;
            }


            updateAdminUserStatus(
                selectedAdminUserRow,
                "suspended"
            );


            showAdminUserMessage(
                profileId +
                " has been suspended.",
                "warning"
            );


            /*
            Later Django will save:

            - Account status = Suspended
            - Suspension reason
            - Admin note
            - Admin ID
            - Action date/time

            Django can also notify
            the affected member.
            */


            const modal =
                bootstrap.Modal
                    .getInstance(
                        suspendUserModalElement
                    );


            if (modal) {

                modal.hide();

            }


            selectedAdminUserRow =
                null;

        }
    );

}



// ================================
// Reactivate User
// ================================

document
    .querySelectorAll(
        ".reactivate-user"
    )
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const row =
                        button.closest(
                            "[data-user-row]"
                        );


                    if (!row) {
                        return;
                    }


                    const profileId =
                        row.dataset.profileId;


                    const confirmed =
                        confirm(
                            "Reactivate account " +
                            profileId +
                            "?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    updateAdminUserStatus(
                        row,
                        "active"
                    );


                    showAdminUserMessage(
                        profileId +
                        " has been reactivated.",
                        "success"
                    );


                    /*
                    Later Django will:

                    - Set account status = Active
                    - Save admin ID
                    - Save reactivation date/time
                    - Create a member notification
                    */

                }
            );

        }
    );



// ================================
// Remove User
// ================================

const removeUserModalElement =
    document.getElementById(
        "removeUserModal"
    );


document
    .querySelectorAll(
        ".remove-user"
    )
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    selectedAdminUserRow =
                        button.closest(
                            "[data-user-row]"
                        );


                    if (
                        !selectedAdminUserRow ||
                        !removeUserModalElement
                    ) {

                        return;

                    }


                    const name =
                        selectedAdminUserRow
                            .dataset.userName;

                    const profileId =
                        selectedAdminUserRow
                            .dataset.profileId;


                    document.getElementById(
                        "removeUserName"
                    ).textContent =
                        name;


                    document.getElementById(
                        "removeUserProfileId"
                    ).textContent =
                        "Profile ID: " +
                        profileId;


                    document.getElementById(
                        "removeReason"
                    ).value = "";


                    document.getElementById(
                        "removeAdminNote"
                    ).value = "";


                    document.getElementById(
                        "removeUserMessage"
                    ).classList.add(
                        "d-none"
                    );


                    const modal =
                        bootstrap.Modal
                            .getOrCreateInstance(
                                removeUserModalElement
                            );


                    modal.show();

                }
            );

        }
    );



const confirmRemoveUser =
    document.getElementById(
        "confirmRemoveUser"
    );


if (confirmRemoveUser) {

    confirmRemoveUser.addEventListener(
        "click",
        function() {

            if (!selectedAdminUserRow) {
                return;
            }


            const reason =
                document.getElementById(
                    "removeReason"
                ).value;


            const note =
                document.getElementById(
                    "removeAdminNote"
                ).value.trim();


            const message =
                document.getElementById(
                    "removeUserMessage"
                );


            if (reason === "") {

                message.textContent =
                    "Please select a removal reason.";

                message.classList.remove(
                    "d-none"
                );

                return;

            }


            if (note === "") {

                message.textContent =
                    "Please add an admin note explaining the removal.";

                message.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "removeAdminNote"
                ).focus();

                return;

            }


            const profileId =
                selectedAdminUserRow
                    .dataset.profileId;


            const confirmed =
                confirm(
                    "Permanently remove account " +
                    profileId +
                    "?"
                );


            if (!confirmed) {
                return;
            }


            updateAdminUserStatus(
                selectedAdminUserRow,
                "removed"
            );


            showAdminUserMessage(
                profileId +
                " has been marked as removed.",
                "danger"
            );


            /*
            Later Django will:

            1. Save account status = Removed.
            2. Save removal reason.
            3. Save admin note.
            4. Save admin ID.
            5. Save action date/time.
            6. Preserve an admin audit record.
            */


            const modal =
                bootstrap.Modal
                    .getInstance(
                        removeUserModalElement
                    );


            if (modal) {

                modal.hide();

            }


            selectedAdminUserRow =
                null;

        }
    );

}



// ================================
// Initial Admin Users Page
// ================================

updateAdminUserCounts();

filterAdminUsers();

// ================================
// KaiBandham Admin Users end
// ================================


// ================================
// KaiBandham Admin Complaints
// ================================


const complaintSearch =
    document.getElementById(
        "complaintSearch"
    );

const complaintStatus =
    document.getElementById(
        "complaintStatus"
    );

const complaintCategory =
    document.getElementById(
        "complaintCategory"
    );

const complaintRows =
    document.querySelectorAll(
        "[data-complaint-row]"
    );

const noComplaintsMessage =
    document.getElementById(
        "noComplaintsMessage"
    );

const complaintModal =
    document.getElementById(
        "complaintModal"
    );

const saveComplaintBtn =
    document.getElementById(
        "saveComplaintBtn"
    );

const sendComplaintResponseBtn =
    document.getElementById(
        "sendComplaintResponseBtn"
    );

const complaintUpdateStatus =
    document.getElementById(
        "complaintUpdateStatus"
    );

const complaintAdminNotes =
    document.getElementById(
        "complaintAdminNotes"
    );

const complaintResponse =
    document.getElementById(
        "complaintResponse"
    );

const complaintActionMessage =
    document.getElementById(
        "complaintActionMessage"
    );


let currentComplaintRow = null;

let currentComplaintButton = null;



// ================================
// Complaint Statistics
// ================================

function updateComplaintCounts() {

    let pending = 0;
    let review = 0;
    let resolved = 0;


    complaintRows.forEach(
        function(row) {

            if (
                row.dataset.status ===
                "pending"
            ) {

                pending++;

            }

            if (
                row.dataset.status ===
                "review"
            ) {

                review++;

            }

            if (
                row.dataset.status ===
                "resolved"
            ) {

                resolved++;

            }

        }
    );


    const pendingCount =
        document.getElementById(
            "pendingComplaintCount"
        );

    const reviewCount =
        document.getElementById(
            "reviewComplaintCount"
        );

    const resolvedCount =
        document.getElementById(
            "resolvedComplaintCount"
        );


    if (pendingCount) {

        pendingCount.textContent =
            pending;

    }


    if (reviewCount) {

        reviewCount.textContent =
            review;

    }


    if (resolvedCount) {

        resolvedCount.textContent =
            resolved;

    }

}



// ================================
// Complaint Filters
// ================================

function filterComplaints() {

    const searchValue =
        complaintSearch
            ? complaintSearch.value
                .trim()
                .toLowerCase()
            : "";


    const statusValue =
        complaintStatus
            ? complaintStatus.value
            : "all";


    const categoryValue =
        complaintCategory
            ? complaintCategory.value
            : "all";


    let visibleComplaints = 0;


    complaintRows.forEach(
        function(row) {

            const complaintId =
                row.dataset.complaintId
                    .toLowerCase();

            const profileId =
                row.dataset.profileId
                    .toLowerCase();

            const rowStatus =
                row.dataset.status;

            const rowCategory =
                row.dataset.category;


            const matchesSearch =
                complaintId.includes(
                    searchValue
                ) ||
                profileId.includes(
                    searchValue
                );


            const matchesStatus =
                statusValue === "all" ||
                rowStatus === statusValue;


            const matchesCategory =
                categoryValue === "all" ||
                rowCategory === categoryValue;


            if (
                matchesSearch &&
                matchesStatus &&
                matchesCategory
            ) {

                row.style.display = "";

                visibleComplaints++;

            } else {

                row.style.display =
                    "none";

            }

        }
    );


    if (noComplaintsMessage) {

        if (visibleComplaints === 0) {

            noComplaintsMessage.classList.remove(
                "d-none"
            );

        } else {

            noComplaintsMessage.classList.add(
                "d-none"
            );

        }

    }

}



if (complaintSearch) {

    complaintSearch.addEventListener(
        "input",
        filterComplaints
    );

}


if (complaintStatus) {

    complaintStatus.addEventListener(
        "change",
        filterComplaints
    );

}


if (complaintCategory) {

    complaintCategory.addEventListener(
        "change",
        filterComplaints
    );

}



// ================================
// Open Complaint Modal
// ================================

if (complaintModal) {

    complaintModal.addEventListener(
        "show.bs.modal",
        function(event) {

            const button =
                event.relatedTarget;


            if (!button) {
                return;
            }


            currentComplaintButton =
                button;

            currentComplaintRow =
                button.closest(
                    "[data-complaint-row]"
                );


            const complaintId =
                button.dataset.complaintId;

            const profileId =
                button.dataset.profileId;

            const memberName =
                button.dataset.memberName;

            const category =
                button.dataset.categoryLabel;

            const subject =
                button.dataset.subject;

            const date =
                button.dataset.date;

            const relatedProfile =
                button.dataset.relatedProfile;

            const replyMethod =
                button.dataset.replyMethod;

            const message =
                button.dataset.message;

            const status =
                currentComplaintRow
                    ? currentComplaintRow.dataset.status
                    : "pending";


            document.getElementById(
                "complaintModalLabel"
            ).textContent =
                "Complaint " +
                complaintId;


            document.getElementById(
                "modalComplaintId"
            ).textContent =
                complaintId;


            document.getElementById(
                "modalComplaintProfile"
            ).textContent =
                profileId;


            document.getElementById(
                "modalComplaintCategory"
            ).textContent =
                category;


            document.getElementById(
                "modalComplaintDate"
            ).textContent =
                date;


            document.getElementById(
                "modalRelatedProfile"
            ).textContent =
                relatedProfile || "Not provided";


            document.getElementById(
                "modalReplyMethod"
            ).textContent =
                replyMethod;


            document.getElementById(
                "modalComplaintSubject"
            ).textContent =
                subject;


            document.getElementById(
                "modalComplaintMessage"
            ).textContent =
                message;


            document.getElementById(
                "modalComplaintMemberName"
            ).textContent =
                memberName;


            document.getElementById(
                "modalComplaintMemberId"
            ).textContent =
                "Profile ID: " +
                profileId;


            if (complaintUpdateStatus) {

                complaintUpdateStatus.value =
                    status;

            }


            updateModalComplaintStatus(
                status
            );


            if (complaintAdminNotes) {

                complaintAdminNotes.value =
                    "";

            }


            if (complaintResponse) {

                complaintResponse.value =
                    "";

            }


            hideComplaintActionMessage();

        }
    );

}



// ================================
// Update Modal Status
// ================================

function updateModalComplaintStatus(
    status
) {

    const modalStatus =
        document.getElementById(
            "modalComplaintStatus"
        );


    if (!modalStatus) {
        return;
    }


    modalStatus.classList.remove(
        "pending",
        "review",
        "resolved"
    );


    if (status === "pending") {

        modalStatus.textContent =
            "Pending";

        modalStatus.classList.add(
            "pending"
        );

    }


    if (status === "review") {

        modalStatus.textContent =
            "Under Review";

        modalStatus.classList.add(
            "review"
        );

    }


    if (status === "resolved") {

        modalStatus.textContent =
            "Resolved";

        modalStatus.classList.add(
            "resolved"
        );

    }

}



// ================================
// Update Complaint Row
// ================================

function updateComplaintRowStatus(
    status
) {

    if (!currentComplaintRow) {
        return;
    }


    currentComplaintRow.dataset.status =
        status;


    const statusBadge =
        currentComplaintRow.querySelector(
            ".admin-status"
        );


    if (statusBadge) {

        statusBadge.classList.remove(
            "pending",
            "review",
            "resolved"
        );


        if (status === "pending") {

            statusBadge.textContent =
                "Pending";

            statusBadge.classList.add(
                "pending"
            );

        }


        if (status === "review") {

            statusBadge.textContent =
                "Under Review";

            statusBadge.classList.add(
                "review"
            );

        }


        if (status === "resolved") {

            statusBadge.textContent =
                "Resolved";

            statusBadge.classList.add(
                "resolved"
            );

        }

    }


    if (currentComplaintButton) {

        if (status === "pending") {

            currentComplaintButton.textContent =
                "View";

            currentComplaintButton.classList.remove(
                "btn-outline-brand",
                "btn-outline-secondary"
            );

            currentComplaintButton.classList.add(
                "btn-brand"
            );

        }


        if (status === "review") {

            currentComplaintButton.textContent =
                "Continue";

            currentComplaintButton.classList.remove(
                "btn-brand",
                "btn-outline-secondary"
            );

            currentComplaintButton.classList.add(
                "btn-outline-brand"
            );

        }


        if (status === "resolved") {

            currentComplaintButton.textContent =
                "View";

            currentComplaintButton.classList.remove(
                "btn-brand",
                "btn-outline-brand"
            );

            currentComplaintButton.classList.add(
                "btn-outline-secondary"
            );

        }

    }


    updateModalComplaintStatus(
        status
    );


    updateComplaintCounts();

    filterComplaints();

}



// ================================
// Action Message
// ================================

function showComplaintActionMessage(
    text,
    type
) {

    if (!complaintActionMessage) {
        return;
    }


    complaintActionMessage.textContent =
        text;


    complaintActionMessage.classList.remove(
        "d-none",
        "alert-success",
        "alert-danger",
        "alert-warning",
        "alert-info"
    );


    complaintActionMessage.classList.add(
        "alert-" + type
    );

}


function hideComplaintActionMessage() {

    if (complaintActionMessage) {

        complaintActionMessage.classList.add(
            "d-none"
        );

    }

}



// ================================
// Save Complaint Update
// ================================

if (saveComplaintBtn) {

    saveComplaintBtn.addEventListener(
        "click",
        function() {

            if (
                !complaintUpdateStatus
            ) {

                return;

            }


            const status =
                complaintUpdateStatus.value;


            /*
            Require an admin note
            before resolving.
            */

            if (
                status === "resolved" &&
                complaintAdminNotes &&
                complaintAdminNotes.value
                    .trim() === ""
            ) {

                showComplaintActionMessage(
                    "Please add an admin note before marking this complaint as resolved.",
                    "warning"
                );

                complaintAdminNotes.focus();

                return;

            }


            updateComplaintRowStatus(
                status
            );


            let statusText =
                "Pending";


            if (status === "review") {

                statusText =
                    "Under Review";

            }


            if (status === "resolved") {

                statusText =
                    "Resolved";

            }


            showComplaintActionMessage(
                "Complaint updated to: " +
                statusText + ".",
                "success"
            );


            /*
            Later Django will save:

            - Complaint status
            - Admin notes
            - Admin ID
            - Updated date/time

            If the status changes,
            Django can create a visual
            notification for the member.
            */

        }
    );

}



// ================================
// Send Response to Member
// ================================

if (sendComplaintResponseBtn) {

    sendComplaintResponseBtn.addEventListener(
        "click",
        function() {

            if (!complaintResponse) {
                return;
            }


            const response =
                complaintResponse.value
                    .trim();


            if (response === "") {

                showComplaintActionMessage(
                    "Please write a response first.",
                    "warning"
                );

                complaintResponse.focus();

                return;

            }


            /*
            If still Pending,
            sending a response means
            the complaint is being handled.
            */

            if (
                currentComplaintRow &&
                currentComplaintRow
                    .dataset.status ===
                    "pending"
            ) {

                updateComplaintRowStatus(
                    "review"
                );


                if (
                    complaintUpdateStatus
                ) {

                    complaintUpdateStatus.value =
                        "review";

                }

            }


            showComplaintActionMessage(
                "Response sent to the member.",
                "success"
            );


            complaintResponse.value =
                "";


            /*
            Later Django will:

            1. Save the admin response.

            2. Save the response date/time.

            3. Save which admin responded.

            4. Deliver the response using
               the member's preferred
               reply method.

            5. Create a visual KaiBandham
               notification when appropriate.
            */

        }
    );

}



// ================================
// Initial Complaint Data
// ================================

updateComplaintCounts();

filterComplaints();


// ================================
// KaiBandham Admin Complaints end
// ================================


// ================================
// KaiBandham Admin Content
// ================================

const adminContentForm =
    document.getElementById(
        "adminContentForm"
    );

const previewContentBtn =
    document.getElementById(
        "previewContentBtn"
    );

const adminContentMessage =
    document.getElementById(
        "adminContentMessage"
    );


/* ================================
   Show Admin Content Message
================================ */

function showAdminContentMessage(
    text,
    type
) {

    if (!adminContentMessage) {
        return;
    }


    adminContentMessage.textContent =
        text;


    adminContentMessage.classList.remove(
        "d-none",
        "alert-success",
        "alert-danger",
        "alert-warning",
        "alert-info"
    );


    adminContentMessage.classList.add(
        "alert-" + type
    );

}



/* ================================
   Validate Content
================================ */

function validateAdminContent() {

    const announcementEnabled =
        document.getElementById(
            "announcementEnabled"
        );

    const announcementTitle =
        document.getElementById(
            "announcementTitle"
        );

    const announcementMessage =
        document.getElementById(
            "announcementMessage"
        );

    const maintenanceEnabled =
        document.getElementById(
            "maintenanceEnabled"
        );

    const maintenanceMessage =
        document.getElementById(
            "maintenanceMessage"
        );


    /*
    Homepage announcement
    requires title + message
    only when enabled.
    */

    if (
        announcementEnabled &&
        announcementEnabled.checked
    ) {

        if (
            announcementTitle.value
                .trim() === ""
        ) {

            showAdminContentMessage(
                "Please enter an announcement title.",
                "warning"
            );

            announcementTitle.focus();

            return false;

        }


        if (
            announcementMessage.value
                .trim() === ""
        ) {

            showAdminContentMessage(
                "Please enter an announcement message.",
                "warning"
            );

            announcementMessage.focus();

            return false;

        }

    }


    /*
    Maintenance message
    required only when
    maintenance is enabled.
    */

    if (
        maintenanceEnabled &&
        maintenanceEnabled.checked &&
        maintenanceMessage.value
            .trim() === ""
    ) {

        showAdminContentMessage(
            "Please enter a maintenance message before enabling the maintenance notice.",
            "warning"
        );

        maintenanceMessage.focus();

        return false;

    }


    return true;

}



/* ================================
   Save Website Content
================================ */

if (adminContentForm) {

    adminContentForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (
                !adminContentForm
                    .checkValidity()
            ) {

                adminContentForm
                    .reportValidity();

                return;

            }


            if (
                !validateAdminContent()
            ) {

                return;

            }


            showAdminContentMessage(
                "Website content saved successfully.",
                "success"
            );


            adminContentMessage
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


            /*
            Later Django will save:

            - Homepage announcement
            - About page content
            - Safety page content
            - Privacy Policy content
            - Terms of Use content
            - Support email
            - Support WhatsApp
            - Support information
            - Maintenance notice
            - Footer text

            Django can also save:

            - Admin ID
            - Last updated date/time
            */

        }
    );

}



/* ================================
   Preview Website Content
================================ */

if (previewContentBtn) {

    previewContentBtn.addEventListener(
        "click",
        function(event) {

            if (
                !validateAdminContent()
            ) {

                /*
                Prevent opening preview
                when required content
                is missing.
                */

                event.preventDefault();

                event.stopPropagation();

                return;

            }


            const announcementEnabled =
                document.getElementById(
                    "announcementEnabled"
                ).checked;


            const announcementTitle =
                document.getElementById(
                    "announcementTitle"
                ).value.trim();


            const announcementMessage =
                document.getElementById(
                    "announcementMessage"
                ).value.trim();


            const aboutContent =
                document.getElementById(
                    "aboutContent"
                ).value.trim();


            const safetyContent =
                document.getElementById(
                    "safetyContent"
                ).value.trim();


            const privacyPolicyContent =
                document.getElementById(
                    "privacyPolicyContent"
                ).value.trim();


            const termsContent =
                document.getElementById(
                    "termsContent"
                ).value.trim();


            const supportEmail =
                document.getElementById(
                    "supportEmail"
                ).value.trim();


            const supportWhatsapp =
                document.getElementById(
                    "supportWhatsapp"
                ).value.trim();


            const supportInformation =
                document.getElementById(
                    "supportInformation"
                ).value.trim();


            const maintenanceEnabled =
                document.getElementById(
                    "maintenanceEnabled"
                ).checked;


            const maintenanceMessage =
                document.getElementById(
                    "maintenanceMessage"
                ).value.trim();


            const footerText =
                document.getElementById(
                    "footerText"
                ).value.trim();



            // ========================
            // Announcement Preview
            // ========================

            const previewAnnouncementSection =
                document.getElementById(
                    "previewAnnouncementSection"
                );


            if (announcementEnabled) {

                previewAnnouncementSection
                    .classList.remove(
                        "d-none"
                    );


                document.getElementById(
                    "previewAnnouncementTitle"
                ).textContent =
                    announcementTitle;


                document.getElementById(
                    "previewAnnouncementMessage"
                ).textContent =
                    announcementMessage;

            } else {

                previewAnnouncementSection
                    .classList.add(
                        "d-none"
                    );

            }



            // ========================
            // Main Page Content
            // ========================

            document.getElementById(
                "previewAboutContent"
            ).textContent =
                aboutContent;


            document.getElementById(
                "previewSafetyContent"
            ).textContent =
                safetyContent;


            document.getElementById(
                "previewPrivacyPolicyContent"
            ).textContent =
                privacyPolicyContent;


            document.getElementById(
                "previewTermsContent"
            ).textContent =
                termsContent;



            // ========================
            // Support
            // ========================

            document.getElementById(
                "previewSupportEmail"
            ).textContent =
                supportEmail
                    ? "Support Email: " +
                      supportEmail
                    : "Support Email: Not set";


            document.getElementById(
                "previewSupportWhatsapp"
            ).textContent =
                supportWhatsapp
                    ? "Support WhatsApp: " +
                      supportWhatsapp
                    : "Support WhatsApp: Not set";


            document.getElementById(
                "previewSupportInformation"
            ).textContent =
                supportInformation;



            // ========================
            // Maintenance
            // ========================

            const previewMaintenanceSection =
                document.getElementById(
                    "previewMaintenanceSection"
                );


            if (maintenanceEnabled) {

                previewMaintenanceSection
                    .classList.remove(
                        "d-none"
                    );


                document.getElementById(
                    "previewMaintenanceMessage"
                ).textContent =
                    maintenanceMessage;

            } else {

                previewMaintenanceSection
                    .classList.add(
                        "d-none"
                    );

            }



            // ========================
            // Footer
            // ========================

            document.getElementById(
                "previewFooterText"
            ).textContent =
                footerText;

        }
    );

}

// ================================
// KaiBandham Admin Content end
// ================================


// ================================
// KaiBandham Contact Support
// ================================

const contactSupportForm =
    document.getElementById(
        "contactSupportForm"
    );

const supportSuccessMessage =
    document.getElementById(
        "supportSuccessMessage"
    );

const supportSuccessDetails =
    document.getElementById(
        "supportSuccessDetails"
    );

const supportErrorMessage =
    document.getElementById(
        "supportErrorMessage"
    );



/* ================================
   Show Support Error
================================ */

function showSupportError(
    message
) {

    if (!supportErrorMessage) {
        return;
    }


    supportErrorMessage.textContent =
        message;


    supportErrorMessage.classList.remove(
        "d-none"
    );


    if (supportSuccessMessage) {

        supportSuccessMessage.classList.add(
            "d-none"
        );

    }

}



/* ================================
   Hide Support Messages
================================ */

function hideSupportMessages() {

    if (supportSuccessMessage) {

        supportSuccessMessage.classList.add(
            "d-none"
        );

    }


    if (supportErrorMessage) {

        supportErrorMessage.classList.add(
            "d-none"
        );

    }

}



/* ================================
   Submit Support Request
================================ */

if (contactSupportForm) {

    contactSupportForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            hideSupportMessages();


            const profileId =
                document.getElementById(
                    "supportProfileId"
                ).value.trim();


            const category =
                document.getElementById(
                    "supportCategory"
                ).value;


            const relatedProfileId =
                document.getElementById(
                    "relatedProfileId"
                ).value.trim();


            const subject =
                document.getElementById(
                    "supportSubject"
                ).value.trim();


            const supportMessage =
                document.getElementById(
                    "supportMessage"
                ).value.trim();


            const replyMethod =
                document.getElementById(
                    "supportReplyMethod"
                ).value;



            // ========================
            // Required Fields
            // ========================

            if (
                profileId === "" ||
                category === "" ||
                subject === "" ||
                supportMessage === ""
            ) {

                showSupportError(
                    "Please complete all required fields."
                );

                return;

            }



            // ========================
            // Related Profile ID
            // ========================

            if (
                relatedProfileId !== "" &&
                !/^KB\d+$/i.test(
                    relatedProfileId
                )
            ) {

                showSupportError(
                    "Please enter a valid related Profile ID, for example KB0045."
                );


                document.getElementById(
                    "relatedProfileId"
                ).focus();


                return;

            }



            // ========================
            // Subject Length
            // ========================

            if (subject.length > 120) {

                showSupportError(
                    "The subject must be 120 characters or less."
                );

                return;

            }



            // ========================
            // Message Length
            // ========================

            if (
                supportMessage.length >
                1500
            ) {

                showSupportError(
                    "Your message must be 1500 characters or less."
                );

                return;

            }



            // ========================
            // Success
            // ========================

            if (supportSuccessDetails) {

                supportSuccessDetails.textContent =
                    "Status: Pending. KaiBandham support will review your request and respond using your preferred reply method.";

            }


            if (supportSuccessMessage) {

                supportSuccessMessage.classList.remove(
                    "d-none"
                );


                supportSuccessMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }



            /*
            Later Django will:

            1. Create a complaint/support record.

            2. Generate a Complaint ID,
               for example CP0019.

            3. Save:
               - Profile ID
               - Category
               - Related Profile ID
               - Subject
               - User message
               - Preferred reply method
               - Submitted date/time
               - Status = Pending

            4. Show the complaint in:
               admin-complaints.html

            5. Later allow status:
               Pending
               → Under Review
               → Resolved

            6. Save the admin response.

            7. Create a visual notification
               when the admin responds.
            */



            // Clear fields after frontend demo submission.

            document.getElementById(
                "supportCategory"
            ).value = "";


            document.getElementById(
                "relatedProfileId"
            ).value = "";


            document.getElementById(
                "supportSubject"
            ).value = "";


            document.getElementById(
                "supportMessage"
            ).value = "";


            document.getElementById(
                "supportReplyMethod"
            ).value =
                "notification";

        }
    );

}


// ================================
// KaiBandham Contact Support end
// ================================


// ================================
// Password Recovery Pages
// ================================

// ================================
// KaiBandham Forgot Password
// ================================

const forgotPasswordForm =
    document.getElementById(
        "forgotPasswordForm"
    );


if (forgotPasswordForm) {

    forgotPasswordForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const emailInput =
                document.getElementById(
                    "resetEmail"
                );


            const resetMessage =
                document.getElementById(
                    "resetMessage"
                );


            const resetErrorMessage =
                document.getElementById(
                    "resetErrorMessage"
                );


            const sendResetLinkBtn =
                document.getElementById(
                    "sendResetLinkBtn"
                );


            const email =
                emailInput.value.trim();



            // Hide previous messages

            resetMessage.classList.add(
                "d-none"
            );

            resetErrorMessage.classList.add(
                "d-none"
            );



            // Empty email

            if (!email) {

                resetErrorMessage.textContent =
                    "Please enter your email address.";

                resetErrorMessage.classList.remove(
                    "d-none"
                );

                emailInput.focus();

                return;
            }



            // Invalid email

            if (!emailInput.checkValidity()) {

                resetErrorMessage.textContent =
                    "Please enter a valid email address.";

                resetErrorMessage.classList.remove(
                    "d-none"
                );

                emailInput.focus();

                return;
            }



            // Success message

            resetMessage.textContent =
                "If an account exists for this email address, password-reset instructions have been sent.";

            resetMessage.classList.remove(
                "d-none"
            );



            // Frontend demo button state

            sendResetLinkBtn.disabled =
                true;

            sendResetLinkBtn.textContent =
                "Reset Link Requested";


            /*
            Later Django will:

            1. Receive the submitted email.

            2. Do NOT reveal whether the
               email belongs to an account.

            3. If the account exists:
               - Find the member securely.
               - Generate a secure,
                 single-use password-reset token.
               - Create a reset URL.
               - Send the reset URL by email.

            4. The reset URL will open the
               password reset page.

               Example flow:

               forgot-password.html
                       ↓
               Email reset link
                       ↓
               reset-password.html
                       ↓
               Create new password
                       ↓
               login.html

            5. The reset token should:
               - Expire after a limited time.
               - Be difficult to guess.
               - Become invalid after use.

            6. Apply rate limiting so users
               cannot repeatedly request
               unlimited reset emails.

            Security:

            Always return a generic response:

            "If an account exists for this
            email address, password-reset
            instructions have been sent."

            Never show:

            "Email not registered"

            because that could reveal
            whether someone has a
            KaiBandham account.
            */

        }
    );

}




// ================================
// KaiBandham Forgot Password end
// ================================


// ================================
// KaiBandham Reset Password
// ================================

const resetPasswordForm =
    document.getElementById(
        "resetPasswordForm"
    );



/* ================================
   Show / Hide Password
================================ */

const resetPasswordToggleButtons =
    document.querySelectorAll(
        ".password-toggle-btn"
    );


resetPasswordToggleButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const targetId =
                    button.dataset.passwordTarget;


                const input =
                    document.getElementById(
                        targetId
                    );


                if (!input) {
                    return;
                }


                const passwordVisible =
                    input.type === "text";


                input.type =
                    passwordVisible
                        ? "password"
                        : "text";


                button.textContent =
                    passwordVisible
                        ? "Show"
                        : "Hide";


                button.setAttribute(
                    "aria-pressed",
                    passwordVisible
                        ? "false"
                        : "true"
                );


                button.setAttribute(
                    "aria-label",
                    passwordVisible
                        ? "Show password"
                        : "Hide password"
                );

            }
        );

    }
);



/* ================================
   Reset Password Form
================================ */

if (resetPasswordForm) {

    resetPasswordForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const newPassword =
                document.getElementById(
                    "newPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmNewPassword"
                ).value;


            const errorMessage =
                document.getElementById(
                    "resetPasswordError"
                );


            const successMessage =
                document.getElementById(
                    "resetPasswordSuccess"
                );


            const resetButton =
                document.getElementById(
                    "resetPasswordBtn"
                );


            const loginArea =
                document.getElementById(
                    "returnLoginArea"
                );



            // Hide previous messages

            errorMessage.textContent = "";

            errorMessage.classList.add(
                "d-none"
            );


            successMessage.classList.add(
                "d-none"
            );



            // Empty New Password

            if (!newPassword) {

                errorMessage.textContent =
                    "Please enter your new password.";

                errorMessage.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "newPassword"
                ).focus();

                return;
            }



            // Minimum Length

            if (newPassword.length < 8) {

                errorMessage.textContent =
                    "New password must contain at least 8 characters.";

                errorMessage.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "newPassword"
                ).focus();

                return;
            }



            // Confirm Password Empty

            if (!confirmPassword) {

                errorMessage.textContent =
                    "Please confirm your new password.";

                errorMessage.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "confirmNewPassword"
                ).focus();

                return;
            }



            // Password Match

            if (
                newPassword !==
                confirmPassword
            ) {

                errorMessage.textContent =
                    "New passwords do not match.";

                errorMessage.classList.remove(
                    "d-none"
                );

                document.getElementById(
                    "confirmNewPassword"
                ).focus();

                return;
            }



            /*
            Later Django will handle the
            real password reset.

            Django should:

            1. Read the reset UID/token
               from the secure reset URL.

            2. Verify that:
               - The token is genuine.
               - The token belongs to
                 the correct account.
               - The token has not expired.
               - The token has not already
                 been used.

            3. If the token is invalid:

               Hide:
               #validResetLinkArea

               Show:
               #invalidResetLinkArea

            4. Apply Django's server-side
               password validation.

            5. Securely hash the new password.

            6. Save the new password.

            7. Invalidate the reset token
               so it cannot be used again.

            8. Consider ending old login
               sessions for account security.

            9. Optionally send a notification
               or email confirming that the
               password was changed.

            Important:

            JavaScript must NOT be trusted
            to validate the reset token.

            Token validation belongs
            entirely to Django.
            */



            // Frontend demo success

            successMessage.classList.remove(
                "d-none"
            );


            resetButton.disabled =
                true;


            resetButton.textContent =
                "Password Reset";


            loginArea.classList.remove(
                "d-none"
            );


            // Disable password inputs
            // after demo success

            document.getElementById(
                "newPassword"
            ).disabled = true;


            document.getElementById(
                "confirmNewPassword"
            ).disabled = true;

        }
    );

}




// ================================
// KaiBandham Reset Password end
// ================================


// ================================
// KaiBandham Account Settings
// ================================


// ================================
// Helper Message
// ================================

function showSettingsMessage(
    element,
    message,
    type
) {

    if (!element) {
        return;
    }

    element.textContent = message;

    element.className =
        "alert alert-" + type;
}



// ================================
// Account Information
// ================================

const accountInfoForm =
    document.getElementById(
        "accountInfoForm"
    );

const accountInfoMessage =
    document.getElementById(
        "accountInfoMessage"
    );


if (accountInfoForm) {

    accountInfoForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "settingsEmail"
                );


            if (!email.value.trim()) {

                showSettingsMessage(
                    accountInfoMessage,
                    "Please enter your email address.",
                    "danger"
                );

                return;
            }


            if (!email.checkValidity()) {

                showSettingsMessage(
                    accountInfoMessage,
                    "Please enter a valid email address.",
                    "danger"
                );

                return;
            }


            showSettingsMessage(
                accountInfoMessage,
                "Account information saved.",
                "success"
            );


            /*
            Later Django will:

            1. Verify the logged-in member.
            2. Validate the email address.
            3. Check whether the email is already
               used by another account.
            4. Save the new email.
            5. Keep Profile ID unchanged.
            */

        }
    );

}



// ================================
// Change Password
// ================================

const changePasswordForm =
    document.getElementById(
        "changePasswordForm"
    );


if (changePasswordForm) {

    changePasswordForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const currentPassword =
                document.getElementById(
                    "currentPassword"
                ).value;


            const newPassword =
                document.getElementById(
                    "settingsNewPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "settingsConfirmPassword"
                ).value;


            const message =
                document.getElementById(
                    "passwordSettingsMessage"
                );


            if (!currentPassword.trim()) {

                showSettingsMessage(
                    message,
                    "Please enter your current password.",
                    "danger"
                );

                return;
            }


            if (newPassword.length < 8) {

                showSettingsMessage(
                    message,
                    "New password must contain at least 8 characters.",
                    "danger"
                );

                return;
            }


            if (newPassword !== confirmPassword) {

                showSettingsMessage(
                    message,
                    "New passwords do not match.",
                    "danger"
                );

                return;
            }


            if (currentPassword === newPassword) {

                showSettingsMessage(
                    message,
                    "Your new password must be different from your current password.",
                    "danger"
                );

                return;
            }


            showSettingsMessage(
                message,
                "Password changed successfully.",
                "success"
            );


            changePasswordForm.reset();


            /*
            Later Django will:

            1. Verify the current password.
            2. Apply Django password validation.
            3. Securely hash the new password.
            4. Save the new password.
            5. Keep or refresh the login session.
            */

        }
    );

}



// ================================
// Notification Preferences
// ================================

const notificationSettingsForm =
    document.getElementById(
        "notificationSettingsForm"
    );


if (notificationSettingsForm) {

    notificationSettingsForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const notifyInterests =
                document.getElementById(
                    "notifyInterests"
                ).checked;


            const notifyMessages =
                document.getElementById(
                    "notifyMessages"
                ).checked;


            const notifyWhatsapp =
                document.getElementById(
                    "notifyWhatsapp"
                ).checked;


            const notifyProfileStatus =
                document.getElementById(
                    "notifyProfileStatus"
                ).checked;


            const notifyReports =
                document.getElementById(
                    "notifyReports"
                ).checked;


            const message =
                document.getElementById(
                    "notificationSettingsMessage"
                );


            showSettingsMessage(
                message,
                "Notification preferences saved.",
                "success"
            );


            /*
            Later Django will save:

            - New Interest notifications
            - New Message notifications
            - WhatsApp Request notifications
            - Profile Status notifications
            - Report Status notifications
            */


            console.log(
                "Notification Settings:",
                {
                    notifyInterests,
                    notifyMessages,
                    notifyWhatsapp,
                    notifyProfileStatus,
                    notifyReports
                }
            );

        }
    );

}



// ================================
// Delete Account
// ================================

const confirmDeleteAccount =
    document.getElementById(
        "confirmDeleteAccount"
    );


const deleteAccountModal =
    document.getElementById(
        "deleteAccountModal"
    );


if (confirmDeleteAccount) {

    confirmDeleteAccount.addEventListener(
        "click",
        function() {

            const password =
                document.getElementById(
                    "deleteAccountPassword"
                ).value;


            const reason =
                document.getElementById(
                    "deleteReason"
                ).value;


            const understood =
                document.getElementById(
                    "deleteAccountUnderstand"
                ).checked;


            const message =
                document.getElementById(
                    "deleteAccountMessage"
                );


            if (!password.trim()) {

                showSettingsMessage(
                    message,
                    "Please enter your password to confirm account deletion.",
                    "danger"
                );

                return;
            }


            if (!understood) {

                showSettingsMessage(
                    message,
                    "Please confirm that you understand account deletion is intended to permanently close your account.",
                    "danger"
                );

                return;
            }


            const confirmed =
                confirm(
                    "Are you sure you want to request permanent deletion of your KaiBandham account?"
                );


            if (!confirmed) {
                return;
            }


            showSettingsMessage(
                message,
                "Account deletion request submitted.",
                "success"
            );


            confirmDeleteAccount.disabled =
                true;


            /*
            Later Django will:

            1. Verify the logged-in user.
            2. Verify the entered password.
            3. Save the optional deletion reason.
            4. Process account deletion according
               to the final retention policy.
            5. End active login sessions.
            6. Prevent future account access.

            Important:

            Hide Profile
            != Delete Account

            Block Contact
            != Delete Account

            Report Profile
            != Automatic Account Deletion
            */


            console.log(
                "Delete reason:",
                reason
            );

        }
    );

}



// ================================
// Reset Delete Account Modal
// ================================

if (deleteAccountModal) {

    deleteAccountModal.addEventListener(
        "hidden.bs.modal",
        function() {

            const password =
                document.getElementById(
                    "deleteAccountPassword"
                );


            const reason =
                document.getElementById(
                    "deleteReason"
                );


            const understood =
                document.getElementById(
                    "deleteAccountUnderstand"
                );


            const message =
                document.getElementById(
                    "deleteAccountMessage"
                );


            if (password) {
                password.value = "";
            }


            if (reason) {
                reason.value = "";
            }


            if (understood) {
                understood.checked = false;
            }


            if (message) {

                message.textContent = "";

                message.className =
                    "alert d-none";
            }


            if (confirmDeleteAccount) {

                confirmDeleteAccount.disabled =
                    false;
            }

        }
    );

}


// ================================
// KaiBandham Account Settings end
// ================================


// ================================
// KaiBandham Saved Profiles
// ================================

const savedProfileList =
    document.getElementById(
        "savedProfilesList"
    );


const savedCount =
    document.getElementById(
        "savedProfileCount"
    );


const emptyState =
    document.getElementById(
        "savedProfilesEmpty"
    );


const savedProfilesMessage =
    document.getElementById(
        "savedProfilesMessage"
    );



/* ================================
   Show Status Message
================================ */

function showSavedProfilesMessage(
    message,
    type
) {

    if (!savedProfilesMessage) {
        return;
    }


    savedProfilesMessage.textContent =
        message;


    savedProfilesMessage.className =
        "alert alert-" + type;

}



/* ================================
   Update Saved Count
================================ */

function updateSavedCount() {

    if (!savedProfileList) {
        return;
    }


    const profiles =
        savedProfileList.querySelectorAll(
            ".saved-profile-item"
        );


    if (savedCount) {

        savedCount.textContent =
            profiles.length;

    }



    // Empty

    if (profiles.length === 0) {

        savedProfileList.classList.add(
            "d-none"
        );


        if (emptyState) {

            emptyState.classList.remove(
                "d-none"
            );

        }

    } else {

        savedProfileList.classList.remove(
            "d-none"
        );


        if (emptyState) {

            emptyState.classList.add(
                "d-none"
            );

        }

    }

}



/* ================================
   Remove Saved Profile

   Event delegation is used because
   each card has more than one
   Remove button.
================================ */

if (savedProfileList) {

    savedProfileList.addEventListener(
        "click",
        function(event) {

            const removeButton =
                event.target.closest(
                    ".remove-saved-btn"
                );


            if (!removeButton) {
                return;
            }



            const profileCard =
                removeButton.closest(
                    ".saved-profile-item"
                );


            if (!profileCard) {
                return;
            }



            const profileId =
                profileCard.dataset.profileId;


            const profileName =
                profileCard.dataset.profileName ||
                "this profile";



            const confirmed =
                confirm(
                    "Remove " +
                    profileName +
                    " from your saved profiles?"
                );


            if (!confirmed) {
                return;
            }



            // Remove frontend card

            profileCard.remove();



            // Update count

            updateSavedCount();



            // Message

            showSavedProfilesMessage(
                profileName +
                " was removed from Saved Profiles.",
                "success"
            );



            /*
            Later Django will:

            1. Verify the logged-in member.

            2. Find the saved-profile record
               belonging to this user.

            3. Remove only that saved record.

            Important:

            Removing from Saved does NOT:

            - Hide the profile
            - Block the member
            - Report the member
            - Cancel an existing interest
            - Delete a conversation
            - Warn or punish the member

            It only removes the profile
            from this user's Saved Profiles.

            The profile owner does not need
            to be notified.
            */


            console.log(
                "Removed saved profile:",
                profileId
            );

        }
    );

}



/* ================================
   Initial Count
================================ */

updateSavedCount();

// ================================
// KaiBandham Saved Profiles end
// ================================

// ================================
// KaiBandham Blocked Contacts blocked-users.html
// ================================

const blockedUsersList =
    document.getElementById(
        "blockedUsersList"
    );


const blockedCount =
    document.getElementById(
        "blockedUserCount"
    );


const blockedEmpty =
    document.getElementById(
        "blockedUsersEmpty"
    );


const blockedContactMessage =
    document.getElementById(
        "blockedContactMessage"
    );



/* ================================
   Update Blocked Contact Count
================================ */

function updateBlockedCount() {

    if (!blockedUsersList) {
        return;
    }


    const users =
        blockedUsersList.querySelectorAll(
            "[data-blocked-user]"
        );


    if (blockedCount) {

        blockedCount.textContent =
            users.length;

    }



    // No blocked contacts

    if (users.length === 0) {

        blockedUsersList.classList.add(
            "d-none"
        );


        if (blockedEmpty) {

            blockedEmpty.classList.remove(
                "d-none"
            );

        }

    } else {

        blockedUsersList.classList.remove(
            "d-none"
        );


        if (blockedEmpty) {

            blockedEmpty.classList.add(
                "d-none"
            );

        }

    }

}



/* ================================
   Show Unblock Message
================================ */

function showBlockedContactMessage(
    message,
    type = "success"
) {

    if (!blockedContactMessage) {
        return;
    }


    blockedContactMessage.textContent =
        message;


    blockedContactMessage.className =
        "alert alert-" +
        type +
        " mb-4";


    blockedContactMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* ================================
   Unblock Contact
================================ */

if (blockedUsersList) {

    blockedUsersList.addEventListener(
        "click",
        function(event) {

            const button =
                event.target.closest(
                    ".unblock-user-btn"
                );


            if (!button) {
                return;
            }



            const userCard =
                button.closest(
                    "[data-blocked-user]"
                );


            if (!userCard) {
                return;
            }



            const userName =
                userCard.dataset.userName ||
                "this member";


            const profileId =
                userCard.dataset.profileId;



            const confirmed =
                confirm(
                    "Unblock " +
                    userName +
                    " (" +
                    profileId +
                    ")?"
                );


            if (!confirmed) {
                return;
            }



            // Remove Frontend Card

            userCard.remove();



            // Update Count

            updateBlockedCount();



            // Show Result

            showBlockedContactMessage(

                userName +
                " has been unblocked. " +
                "Normal KaiBandham contact rules now apply again. " +
                "Old interests, conversations and WhatsApp approvals are not automatically restored."

            );



            /*
            Later Django will:

            1. Verify the logged-in user
               created this block.

            2. Remove the Blocked Contact
               record between these members.

            3. Record, if needed:

               - User removing block
               - Other Profile ID
               - Date / Time

            4. Allow future interests
               according to normal
               KaiBandham rules.

            5. Allow messaging only when
               normal interest and
               conversation requirements
               are satisfied.

            6. Allow future Personal
               WhatsApp requests only
               according to:

               Accepted Interest
                    ↓
               Text Chat
                    ↓
               15 TOTAL Messages
                    ↓
               WhatsApp Request
                    ↓
               Owner Approval


            IMPORTANT:

            Unblocking does NOT automatically:

            - Restore an old interest
            - Reopen an old conversation
            - Restore previous chat access
            - Reveal Personal WhatsApp
            - Restore WhatsApp approval
            - Create a report
            - Notify admin of wrongdoing


            BLOCKING ALSO MUST NEVER:

            - Create a warning
            - Create a penalty
            - Reduce reputation
            - Automatically suspend
              a member because many
              people blocked them
            */


            console.log(
                "Unblocked contact:",
                {
                    profileId,
                    userName
                }
            );

        }
    );

}



/* ================================
   Initial State
================================ */

updateBlockedCount();

// ================================
// KaiBandham Blocked Contacts end
// ================================
