import LoungeApi from "@/api";
import { lateinit } from "@/utils/lateinit";
import assert from "assert";

describe('API', () => {
    let api = lateinit<LoungeApi>()

    beforeAll( () => {    
        api = new LoungeApi();
    });

    it('Tables', () => {
        assert(api.getTables());
    });
});