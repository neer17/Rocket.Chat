import { callbacks } from '../../../app/callbacks/server';
import { onLicense } from '../../app/license/server';

onLicense('SAML-enterprise', () => {
	callbacks.add('SAML-rolesync', ({ updateData, globalRoles }: {updateData: any; globalRoles: any}) => {
		console.log('saml rolesync');
		updateData.roles = globalRoles;
	});
});
