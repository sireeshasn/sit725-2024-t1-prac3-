$(document).ready(function(){
    // Initialize modal
    $('.modal').modal();

    // Attach click event handler to open modal when "click me" button is clicked
    $('#clickMeButton').click(function() {
        $('#modal1').modal('open');
    });

    // Handle form submission
    $('#formSubmit').click(function() {
        // Here, you can add your form submission logic
        // For example, you can retrieve form values using jQuery and perform AJAX request
        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        var password = $('#password').val();
        var email = $('#email').val();

        // Perform form submission or any other desired action
        // For demonstration, let's just log the values to the console
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Password:", password);
        console.log("Email:", email);

        // Close the modal after form submission
        $('#modal1').modal('close');
    });
});
