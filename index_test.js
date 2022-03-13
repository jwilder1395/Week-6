const expect = chai.expect;

describe('TestFunction', function(){
    describe('#compareSortNumber', function(){
        it(`should compare the parameters sortNumber and return 1 if w is greater than y`, function(){
            let w = {
                sortNumber: 0.5
            }
            let y = {
                sortNumber: 0.1
           }
           var z = compareSortNumber(w, y);
           expect(z).to.equal(1);
        });
        it(`should compare the parameters sortNumber and return -1 if y is greater than w`, function(){
            let w = {
                sortNumber: 0.2
            }
            let y = {
                sortNumber: 0.9
            }
            var z = compareSortNumber(w, y);
            expect(z).to.equal(-1);
        });
        it(`should compare parameters sortNumber and return 0 if w is equal to y`, function(){
            let w = {
                sortNumber: 1
            }
            let y = {
                sortNumber: 1
            }
            var z = compareSortNumber(w, y);
            expect(z).to.equal(0);
        })
    })
})