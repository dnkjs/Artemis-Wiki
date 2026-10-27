const { execSync } = require('child_process');
const fs = require('fs');

const ps = `
$target = 'LegacyGeneric:target=GitHub - https://api.github.com/dnkjs'
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class CME {
    [DllImport("advapi32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
    public static extern bool CredRead(string target, int type, int reservedFlag, out IntPtr credPtr);
    [DllImport("advapi32.dll", SetLastError = true)]
    public static extern void CredFree(IntPtr credPtr);
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct CRED {
        public int Flags, Type; public string TargetName, Comment;
        public System.Runtime.InteropServices.ComTypes.FILETIME LastWritten;
        public int CredentialBlobSize; public IntPtr CredentialBlob;
        public int Persist, AttributeCount; public IntPtr Attributes;
        public string TargetAlias, UserName;
    }
    public static string Get(string target) {
        IntPtr p;
        if (CredRead(target, 1, 0, out p)) {
            CRED c = (CRED)Marshal.PtrToStructure(p, typeof(CRED));
            byte[] b = new byte[c.CredentialBlobSize];
            Marshal.Copy(c.CredentialBlob, b, 0, c.CredentialBlobSize);
            CredFree(p);
            return System.Text.Encoding.UTF8.GetString(b);
        }
        return null;
    }
}
"@
[CME]::Get($target)
`;
fs.writeFileSync('temp_t.ps1', ps, 'utf8');
const token = execSync('powershell -ExecutionPolicy Bypass -File temp_t.ps1', { encoding: 'utf8' }).trim();
fs.unlinkSync('temp_t.ps1');

execSync(`git remote set-url origin https://dnkjs:${token}@github.com/dnkjs/Artemis-Wiki.git`);
execSync('git add -A');
execSync('git commit -m "Clean push_docs"');
execSync('git push origin main');
execSync('git remote set-url origin https://github.com/dnkjs/Artemis-Wiki.git');
console.log('Clean push complete!');
