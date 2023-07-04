import NextAuth from 'next-auth';
import { authOptions } from '@/lib/session';
import { auth } from '@grafbase/sdk';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };