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
        //newButton.style.padding = '10px';
        
    
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
  
  // Run the function initially
  addButtonToEntries();
  

  document.addEventListener('DOMContentLoaded', addButtonToEntries);

  // Use a MutationObserver to detect changes in the DOM and add the form to new entries
  //const observer = new MutationObserver(addButtonToEntries);
  //observer.observe(document.body, { childList: true, subtree: true });
  