
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
// protfolio filters
$(window).on("load", function() {
    var t = $(".projects-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// notification system






// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}



// Subscription Modal


    document.querySelectorAll('.subscribe-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            document.getElementById('planName').textContent = plan;
            document.getElementById('selectedPlan').value = plan;

            // Reset form and hide previous messages/details
            document.getElementById('subscriptionForm').reset();
            document.getElementById('subscriptionForm').classList.remove('was-validated'); // Clear validation states
            document.querySelectorAll('.form-control.is-invalid').forEach(input => {
                input.classList.remove('is-invalid');
            });

            document.getElementById('subscriptionSuccess').style.display = 'none';
            document.getElementById('subscriptionSuccess').classList.remove('animate__fadeIn');
            document.getElementById('subscriptionError').style.display = 'none';
            document.getElementById('subscriptionError').classList.remove('animate__shakeX');

            // Hide and clear payment details card
            document.getElementById('paymentDetails').style.display = 'none';
            document.getElementById('paymentDetails').classList.remove('animate__fadeIn');
            const paymentCardBody = document.getElementById('paymentCardBody');
            if (paymentCardBody) {
                paymentCardBody.innerHTML = '';
            }

            // Reset payment method dropdown and search
            setupPaymentMethodSearch(); // Re-initialize search and options
            document.getElementById('paymentMethod').value = ""; // Ensure default option is selected
            // No need to trigger change directly here, as setupPaymentMethodSearch handles initial state
            // If you want to force hide payment details on modal open even if a method was pre-selected previously,
            // the 'paymentDetails.style.display = "none"' above handles it.

            $('#subscriptionModal').modal('show');
        });
    });

    // Integrated search for select dropdown
    let originalPaymentMethods = [];
    let searchInputInSelect = document.createElement('input');

    function setupPaymentMethodSearch() {
        const paymentMethodSelect = document.getElementById('paymentMethod');

        // Store original options only once if not already stored
        if (originalPaymentMethods.length === 0) {
            originalPaymentMethods = Array.from(paymentMethodSelect.options).map(option => ({
                value: option.value,
                text: option.textContent
            }));
            // Remove the first "Select or search..." option from original array as it's handled separately
            originalPaymentMethods = originalPaymentMethods.filter(option => option.value !== "");
        }

        // Clear current options in the select
        paymentMethodSelect.innerHTML = '';

        // Configure and prepend the search input
        searchInputInSelect.setAttribute('type', 'text');
        searchInputInSelect.setAttribute('placeholder', 'Search...');
        searchInputInSelect.classList.add('search-input-in-select');
        searchInputInSelect.value = ''; // Clear search input value
        paymentMethodSelect.appendChild(searchInputInSelect); // Append it, then JS will filter around it

        // Add the default "Select or search..." option
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Select or search for a payment method";
        paymentMethodSelect.appendChild(defaultOption);

        // Filter and add the rest of the options
        filterPaymentMethods('');

        // Ensure search input is visible and focused when dropdown opens
        // This is a common workaround for native selects.
        paymentMethodSelect.addEventListener('focus', function() {
            searchInputInSelect.style.display = 'block';
            searchInputInSelect.focus();
        });

        // Event listener for search input
        searchInputInSelect.removeEventListener('input', handleSearchInput); // Prevent duplicate listeners
        searchInputInSelect.addEventListener('input', handleSearchInput);
    }

    function handleSearchInput() {
        filterPaymentMethods(this.value);
    }


    function filterPaymentMethods(searchTerm) {
        const paymentMethodSelect = document.getElementById('paymentMethod');
        const currentSelectedValue = paymentMethodSelect.value; // Store current value to re-select if exists

        // Remove all current options except the search input and default placeholder
        Array.from(paymentMethodSelect.options).forEach(option => {
            if (option !== searchInputInSelect && option.value !== "") {
                paymentMethodSelect.removeChild(option);
            }
        });

        const filteredOptions = originalPaymentMethods.filter(option =>
            option.text.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredOptions.length === 0 && searchTerm !== '') {
            const noMatchOption = document.createElement('option');
            noMatchOption.value = "";
            noMatchOption.textContent = "No matching methods found";
            noMatchOption.disabled = true;
            paymentMethodSelect.appendChild(noMatchOption);
        } else {
            filteredOptions.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                paymentMethodSelect.appendChild(option);
            });
        }
        // Restore previous selection if it's still available
        if (filteredOptions.some(opt => opt.value === currentSelectedValue)) {
            paymentMethodSelect.value = currentSelectedValue;
        } else {
            paymentMethodSelect.value = ""; // Otherwise, reset
        }
    }


    // Update payment details card UI
    function updatePaymentDetailsUI(method, cardContent, cardIconClass, cardTitle, cardClass) {
        const paymentDetailsCard = document.getElementById('paymentDetails');
        const paymentCardIcon = document.getElementById('paymentCardIcon');
        const paymentCardTitle = document.getElementById('paymentCardTitle');
        let paymentCardBody = document.getElementById('paymentCardBody');

        // Ensure paymentCardBody exists
        if (!paymentCardBody) {
            console.error("paymentCardBody not found!"); // Should not happen with the new HTML
            return;
        }

        paymentCardIcon.className = `payment-icon mr-2 ${cardIconClass}`;
        paymentCardTitle.textContent = cardTitle;
        paymentCardBody.innerHTML = cardContent;

        // Reset and add specific card class
        paymentDetailsCard.className = 'payment-card-view mt-3 mb-2 animate__animated animate__fadeIn'; // Reset all classes
        if (cardClass) {
            paymentDetailsCard.classList.add(cardClass);
        }
        paymentDetailsCard.style.display = 'block';
    }


    document.getElementById('paymentMethod').addEventListener('change', function() {
        let selectedMethod = this.value;
        let cardContent = '';
        let cardIconClass = '';
        let cardTitle = '';
        let cardClass = ''; // For specific background styles

        // Hide payment details if no method is selected or search input is active
        if (!selectedMethod || selectedMethod === searchInputInSelect.value) { // Also hide if search input is implicitly selected
            document.getElementById('paymentDetails').style.display = 'none';
            return;
        }

        switch(selectedMethod) {
            case 'credit':
                cardIconClass = 'fas fa-credit-card';
                cardTitle = 'Credit/Debit Card';
                cardClass = 'credit-card';
                cardContent = `
                    <div class="form-group">
                        <label>Card Number</label>
                        <input type="text" class="form-control" maxlength="19" placeholder="XXXX XXXX XXXX XXXX" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Expiry</label>
                            <input type="text" class="form-control" maxlength="5" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label>CVC</label>
                            <input type="text" class="form-control" maxlength="4" placeholder="CVC" required>
                        </div>
                    </div>
                `;
                break;
            case 'paypal':
                cardIconClass = 'fab fa-paypal';
                cardTitle = 'PayPal';
                cardClass = 'paypal-card';
                cardContent = `<div class="alert alert-info">You will be redirected to PayPal to complete your payment.</div>`;
                break;
            case 'stripe':
                cardIconClass = 'fab fa-stripe';
                cardTitle = 'Stripe';
                cardClass = 'stripe-card';
                cardContent = `<div class="alert alert-info">Stripe payment gateway will open in a new window.</div>`;
                break;
            case 'googlepay':
                cardIconClass = 'fab fa-google-pay';
                cardTitle = 'Google Pay';
                cardClass = 'googlepay-card';
                cardContent = `<div class="alert alert-info">You will be prompted to complete payment with Google Pay.</div>`;
                break;
            case 'applepay':
                cardIconClass = 'fab fa-apple-pay';
                cardTitle = 'Apple Pay';
                cardClass = 'applepay-card';
                cardContent = `<div class="alert alert-info">You will be prompted to complete payment with Apple Pay.</div>`;
                break;
            case 'klarna':
                cardIconClass = 'fas fa-money-bill-wave';
                cardTitle = 'Klarna';
                cardContent = `<div class="alert alert-info">Complete your payment with Klarna (Pay Later/Installments).</div>`;
                break;
            case 'afterpay':
                cardIconClass = 'fas fa-shopping-bag';
                cardTitle = 'Afterpay';
                cardContent = `<div class="alert alert-info">Pay in 4 interest-free installments with Afterpay.</div>`;
                break;
            case 'affirm':
                cardIconClass = 'fas fa-hand-holding-usd';
                cardTitle = 'Affirm';
                cardContent = `<div class="alert alert-info">Choose a flexible payment plan with Affirm.</div>`;
                break;
            case 'venmo':
                cardIconClass = 'fab fa-venmo';
                cardTitle = 'Venmo';
                cardContent = `<div class="alert alert-info">Scan QR code or open Venmo app to send payment.</div>`;
                break;
            case 'zelle':
                cardIconClass = 'fas fa-university';
                cardTitle = 'Zelle';
                cardContent = `<div class="alert alert-info">Send payment via Zelle to: <b class="text-break">your_email@example.com</b></div>`;
                break;
            case 'ideal':
                cardIconClass = 'fas fa-money-check-alt';
                cardTitle = 'iDEAL';
                cardContent = `<div class="alert alert-info">You will be redirected to your bank to pay with iDEAL.</div>`;
                break;
            case 'sepa':
                cardIconClass = 'fas fa-euro-sign';
                cardTitle = 'SEPA Direct Debit';
                cardContent = `<div class="alert alert-info">SEPA Direct Debit: Mandate will be set up for recurring payments.</div>`;
                break;
            case 'giropay':
                cardIconClass = 'fas fa-university';
                cardTitle = 'Giropay';
                cardContent = `<div class="alert alert-info">You will be redirected to your bank for Giropay payment.</div>`;
                break;
            case 'eps':
                cardIconClass = 'fas fa-piggy-bank';
                cardTitle = 'EPS';
                cardContent = `<div class="alert alert-info">You will be redirected to your bank for EPS payment.</div>`;
                break;
            case 'mybank':
                cardIconClass = 'fas fa-building-columns';
                cardTitle = 'MyBank';
                cardContent = `<div class="alert alert-info">You will be redirected to your bank for MyBank payment.</div>`;
                break;
            case 'p24':
                cardIconClass = 'fas fa-wallet';
                cardTitle = 'Przelewy24';
                cardContent = `<div class="alert alert-info">You will be redirected to Przelewy24 for payment.</div>`;
                break;
            case 'sofort':
                cardIconClass = 'fas fa-arrow-right-to-bracket';
                cardTitle = 'Sofort';
                cardContent = `<div class="alert alert-info">You will be redirected to Sofort to complete your bank transfer.</div>`;
                break;
            case 'alipay':
                cardIconClass = 'fab fa-alipay';
                cardTitle = 'Alipay';
                cardContent = `<div class="alert alert-info">Scan QR code with Alipay app to complete payment.</div>`;
                break;
            case 'wechatpay':
                cardIconClass = 'fab fa-weixin';
                cardTitle = 'WeChat Pay';
                cardContent = `<div class="alert alert-info">Scan QR code with WeChat Pay app to complete payment.</div>`;
                break;
            case 'unionpay':
                cardIconClass = 'fab fa-cc-unionpay';
                cardTitle = 'UnionPay';
                cardContent = `<div class="alert alert-info">You will be redirected to UnionPay for card payment.</div>`;
                break;
            case 'bitcoin':
            case 'ethereum':
            case 'usdt':
            case 'litecoin':
                cardClass = 'crypto-card';
                const cryptoInfo = {
                    'bitcoin': { icon: 'fab fa-bitcoin', title: 'Bitcoin (BTC)', address: 'bc1q...xyz', network: 'Bitcoin' },
                    'ethereum': { icon: 'fab fa-ethereum', title: 'Ethereum (ETH)', address: '0x...abc', network: 'ERC20' },
                    'usdt': { icon: 'fas fa-dollar-sign', title: 'USDT (Tether)', address: '0x...def', network: 'ERC20' },
                    'litecoin': { icon: 'fab fa-ethereum', title: 'Litecoin (LTC)', address: 'ltc1q...ghi', network: 'Litecoin' } // Using ethereum icon for litecoin as no direct LTC icon in FA5
                }[selectedMethod];
                cardIconClass = cryptoInfo.icon;
                cardTitle = cryptoInfo.title;
                cardContent = `
                    <div class="alert alert-info"><i class="fas fa-wallet payment-icon"></i>Send ${cryptoInfo.title} to: <b class="text-break">${cryptoInfo.address}</b><br><small class="text-muted">Please ensure correct network (${cryptoInfo.network}) and double-check address.</small></div>
                    <div class="form-group">
                        <label for="cryptoTxId">Transaction ID (TxID) <span class="text-danger">(Required for confirmation)</span></label>
                        <input type="text" class="form-control" id="cryptoTxId" placeholder="Enter transaction ID or hash" required>
                    </div>
                `;
                break;
            case 'bank':
                cardIconClass = 'fas fa-bank';
                cardTitle = 'Bank Transfer';
                cardClass = 'bank-card';
                cardContent = `
                    <div class="alert alert-info">Please transfer funds to: <br><b>Account Name:</b> Your Company Name<br><b>Account Number:</b> 1234567890<br><b>IBAN:</b> PK00XXXX0000000000<br><b>SWIFT/BIC:</b> BANKCODEPK</div>
                    <div class="form-group">
                        <label for="bankRef">Bank Reference (Optional)</label>
                        <input type="text" class="form-control" id="bankRef" placeholder="Enter bank transfer reference">
                    </div>
                `;
                break;
            default:
                // This case should ideally not be hit if defaultOption is properly handled
                cardContent = '';
                cardIconClass = '';
                cardTitle = '';
                cardClass = '';
                document.getElementById('paymentDetails').style.display = 'none';
        }

        if (selectedMethod) {
            updatePaymentDetailsUI(selectedMethod, cardContent, cardIconClass, cardTitle, cardClass);
        }
    });

    // Fake form submit for demo
    document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulate form validation
        const isValid = this.checkValidity();
        if (!isValid) {
            this.classList.add('was-validated'); // Add Bootstrap's validation styles
            document.getElementById('subscriptionError').innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill in all required fields.';
            document.getElementById('subscriptionError').style.display = 'block';
            document.getElementById('subscriptionError').classList.add('animate__animated', 'animate__shakeX');
            document.getElementById('subscriptionSuccess').style.display = 'none';
            // Add red border to invalid inputs
            this.querySelectorAll(':invalid').forEach(input => {
                input.classList.add('is-invalid');
            });
            return;
        } else {
            this.classList.remove('was-validated');
            // Remove red border from all inputs on valid submission
            this.querySelectorAll('.is-invalid').forEach(input => {
                input.classList.remove('is-invalid');
            });
        }

        // Simulate a successful submission
        document.getElementById('subscriptionSuccess').style.display = 'block';
        document.getElementById('subscriptionSuccess').classList.add('animate__animated', 'animate__fadeIn');
        document.getElementById('subscriptionError').style.display = 'none';

        // Log form data
        console.log('Form Submitted!', {
            name: document.getElementById('subscriberName').value,
            email: document.getElementById('subscriberEmail').value,
            plan: document.getElementById('selectedPlan').value,
            paymentMethod: document.getElementById('paymentMethod').value,
        });

        // Hide modal after successful submission
        setTimeout(() => {
            $('#subscriptionModal').modal('hide');
        }, 2000); // Hide after 2 seconds
    });

    // Close button functionality for the subscription modal
    document.querySelectorAll('[data-dismiss="modal"]').forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest modal and hide it
            const modal = this.closest('.modal');
            if (modal) {
                $(modal).modal('hide');
            }
        });
    });
