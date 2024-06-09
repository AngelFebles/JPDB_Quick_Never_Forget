function addButtonToEntries() {
    // Select all divs with the class "entry"
    const entries = document.querySelectorAll('.entry');
    
    // Iterate over each entry
    entries.forEach(entry => {
      
      const forgetFormAdd = entry.querySelector('form[action="/deck/never-forget/add"]');
      const forgetFormRemove = entry.querySelector('form[action="/deck/never-forget/remove-from-deck"]');
  if (forgetFormAdd || forgetFormRemove) {
      
        const newDiv = document.createElement('div');
        newDiv.className = 'ExtensionButton';
         
        // Create the submit input element
        const newButton = document.createElement('input');
        newButton.type = 'button';
            
    
        if (forgetFormAdd) {
          newButton.value = '強';
  
        } else if (forgetFormRemove) {
          newButton.value = '弱';
          newButton.style.backgroundColor = 'green';
        }


      // Add click event to the button
        newButton.addEventListener('click', () => {
         
        if (forgetFormAdd) {
          forgetFormAdd.querySelector('input[type="submit"]').click();
         
        } else if (forgetFormRemove) {
          forgetFormRemove.querySelector('input[type="submit"]').click();
        }
      });

        newDiv.appendChild(newButton);
        entry.appendChild(newDiv);

    }
      
    });
  }
  

 document.addEventListener('DOMContentLoaded', addButtonToEntries());

  // JPDB uses a custom "virtual refresh" to load new content into the website
  // We need to listen for this event and add the buttons to the new content since the page doesn't actually reload
document.addEventListener("virtual-refresh", function() {
    addButtonToEntries();
});