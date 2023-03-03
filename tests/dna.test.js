const {dnaNonCanonical} = require('../dna');

//  Test CTAGGGTA -> CTAG
test('Test DNA, default value', ()=>{
    expect(dnaNonCanonical('CTAGGGTA')).toStrictEqual('CTAG');
});