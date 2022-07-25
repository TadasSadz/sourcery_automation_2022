// @ts-check
const { test, expect } = require('@playwright/test');
const { SearchCalculator } = require('../Pages/SearchCalculator');
const { SearchResultsCalculator } = require('../Pages/SearchResultsCalculator');
const data = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'

]

const operations = [
  'Add',
  'Subtract',
  'Multiply',
  'Divide',
  'Concatenate'
]

data.forEach(version => {

  test.describe('Calculator build ' + version, () => {

    test.describe('Calculator elements ', () => {
      test('Should be able to see the "First Number" field', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#number1Field');

            await expect(state, 'The first number field is not shown.' ).toBe(false);
          });

          test('Should be able to see the "Second number" field', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#number2Field');

            await expect(state, 'The second number field is not shown.' ).toBe(false);
          });

          test('Should respect the order of "First number" and "Second number" in subtraction', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let answer = await searchResultsCalculator.getOperationResults('30','20','Subtract')

            await expect(answer, 'The order of the First and Second number field in calculation is not correct.' ).not.toHaveValue('-10');
          }); 


          test('Should respect the order of "First number" and "Second number" in divison', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let answer = await searchResultsCalculator.getOperationResults('100','50','Divide')

            await expect(answer, 'The order of the First and Second number field in calculation is not correct.').not.toHaveValue('0.5');
          }); 

         test('Should respect the order of "First number" and "Second number" in concatenation', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let answer = await searchResultsCalculator.getOperationResults('20','22','Concatenate')

            await expect(answer, 'The order of the First and Second number field in calculation is not correct.').not.toHaveValue('2220');
          }); 

          test('Should be able to see the "Operation" dropdown box', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#selectOperationDropdown');

            await expect(state, 'the "Operation" drowndown box is not showed.').toBe(false);
          });

          test('Should be able to click the "Calculate" button', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#calculateButton');

            await expect(state, 'You can not click on the "Calculate" button.').toBe(false);
          });

          test('Should be able to see the "Answer" field', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#numberAnswerField');

            await expect(state, 'You can not see on the "Answer" field.').toBe(false);
          });

          test('Should be able to click the "Clear" button.', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#clearButton')

            await expect(state, 'You can not click on the "Clear" button.').toBe(false);
          });

          test('Should be able to click the "Integers only" check box.', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            let state = await searchResultsCalculator.getButtonState('#integerSelect')

            await expect(state, 'You can not click on the "Integers only" checkbox.').toBe(false);
          });

          test('Should not be able to see the "Integers only" check box when "Concatenate" operation is selected.', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            let state = await searchResultsCalculator.getButtonState('#integerSelect')

            await expect(state, 'You can see the "Integers only" check box when "Concantenate" operation is selected.').toBe(true);
          }); 

    });
    
    test.describe('Addition ', () => {

          test('Adding 2 and 3 should result in value 5 (Positive integer test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('2','3','Add')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('5');
          });

          test('Adding 2.5 and 3.5 should result in value 5 (Positive float test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('2.5','3.5','Add')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('6');
          });

          test('Adding values -10 and -10 should result in value -20 (Negative integer test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('-10','-10','Add')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('-20');
          });

          test('Should not work with strings while using the operator: "Add" ', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
            
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            await searchResultsCalculator.getOperationResults('a','b','Add')
            let text = await page.locator('#errorMsgField').textContent();

            await expect(text, 'You can write strings in the Number Fields.').toContain('is not a number')
            
          }); 

    });

    test.describe('Substraction ', () => {

          test('Subtracting 3 and 1 should result in value 2 (Positive number test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('3','1','Subtract')

            await expect(answer, 'The given answer is wrong.').toHaveValue('2');
          });

          test('Subtracting 3 and 1 should result in value 2 (Positive integer test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('3','1','Subtract')

            await expect(answer, 'The given answer is wrong.').toHaveValue('2');
          });

          test('Subtracting 3.5 and 1.5 should result in value 2 (Positive float test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('3.5','1.5','Subtract')

            await expect(answer, 'The given answer is wrong.').toHaveValue('2');
          });

          test('Substracting values -10 and -10 should result in value 0 (Negative integer test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('-10','-10','Subtract')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('0');
          });

          test('Should not work with strings while using the operator: "Subtract" ', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
            
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            await searchResultsCalculator.getOperationResults('a','b','Subtract')
            let text = await page.locator('#errorMsgField').textContent();

            await expect(text, 'You can write strings in the Number Fields.').toContain('is not a number')
          }); 

    });
    test.describe('Multiplication ', () => {

          test('Multiplying 5 and 5 should result in value 25 (Positive integer test)', async ({ page }) => {
                let searchCalculator= new SearchCalculator(page);
                await searchCalculator.navigate();
                await searchCalculator.selectVersion(version);

                let searchResultsCalculator = new SearchResultsCalculator(page);
                //First_number, Second_Number, Operation
                let answer = await searchResultsCalculator.getOperationResults('5','5','Multiply')

                await expect(answer, 'The given answer is wrong.').toHaveValue('25');
          });

          test('Multiplying 5.5 and 5.5 should result in value 30.25 (Positive float test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('5.5','5.5','Multiply')

            await expect(answer, 'The given answer is wrong.').toHaveValue('30.25');
          });

          test('Multiplying values -10 and -10 should result in value 100 (Negative integer test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('-10','-10','Multiply')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('100');
          });

          test('Should get value 0 when you multiply a number by 0', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
      
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('100','0','Multiply')
      
            await expect(answer, '0 is not shown.').toHaveValue('0');
          });

          test('Should not work with strings while using the operator: "Multiply" ', async ({ page }) => {
                let searchCalculator= new SearchCalculator(page);
                await searchCalculator.navigate();
                await searchCalculator.selectVersion(version);
                
                let searchResultsCalculator = new SearchResultsCalculator(page);
                //First_number, Second_Number, Operation
                await searchResultsCalculator.getOperationResults('a','b','Multiply')
                let text = await page.locator('#errorMsgField').textContent();

                await expect(text, 'You can write strings in the Number Fields.').toContain('is not a number')
                
          }); 
          
    });
    test.describe('Division ', () => {

          test('Dividing values 20 with 4 should result in value 5 (Positive integer test)', async ({ page }) => {
                let searchCalculator= new SearchCalculator(page);
                await searchCalculator.navigate();
                await searchCalculator.selectVersion(version);

                let searchResultsCalculator = new SearchResultsCalculator(page);
                //First_number, Second_Number, Operation
                let answer = await searchResultsCalculator.getOperationResults('20','4','Divide')

                await expect(answer, 'The given answer is wrong.').toHaveValue('5');
          });

          test('Dividing values 20.5 with 4.5 should result in value 5 (Positive float test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('20.5','4.5','Divide')

            await expect(answer, 'The given answer is wrong.').toHaveValue('4.555555555555555');
          });

          test('Dividing values -10 and -10 should result in value 1 (Negative integer test)', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);

            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('-10','-10','Divide')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('1');
          });

          test('Should not be possible to divide a number by value 0', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
      
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            await searchResultsCalculator.getOperationResults('20','0','Divide')
            let text = await page.locator('#errorMsgField').textContent();
      
            await expect(text, 'The Calculator lets you divide by 0.').toEqual('Divide by zero error!')
          }); 

          test('Should not work with strings while using the operator: "Divide" ', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
            
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            await searchResultsCalculator.getOperationResults('a','b','Divide')
            let text = await page.locator('#errorMsgField').textContent();
      
            await expect(text, 'You can write strings in the Number Fields.').toContain('is not a number')
          }); 
        
    });
    test.describe('Concatenation ', () => {

          test('Concatenating 20 with 22 should result in value 2022', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
      
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('20','22','Concatenate')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('2022');
          });

          test('Concatenating Tadas with Sadz should result in value TadasSadz', async ({ page }) => {
            let searchCalculator= new SearchCalculator(page);
            await searchCalculator.navigate();
            await searchCalculator.selectVersion(version);
      
            let searchResultsCalculator = new SearchResultsCalculator(page);
            //First_number, Second_Number, Operation
            let answer = await searchResultsCalculator.getOperationResults('Tadas','Sadz','Concatenate')
      
            await expect(answer, 'The given answer is wrong.').toHaveValue('TadasSadz');
          });

    });

  });

});

