import { test, expect } from '@playwright/test';
import { getCssText } from '../src/lib/cssText';

test("voiceState", async () => {
	expect(getCssText({
		styles: {
			voiceState: {
				display: 'flex',
				height: 'auto',
				marginBottom: '0px',
				flexDirection: 'column',
			}
		},
	})).toEqual(
`[class*=\"Voice_voiceState__\"] {
  display: flex;
  height: auto;
  margin-bottom: 0px;
  flex-direction: column;
}`	
	)
});

test("hiddenUserId", async () => {
	expect(getCssText({
		styles: {},
		hiddenUserId: '123',
	})).toEqual(
`
[src*="avatars/123/"], [src*="avatars/123/"] + [class*="Voice_user_"]  {
  display: none;
}
`
	)
});
