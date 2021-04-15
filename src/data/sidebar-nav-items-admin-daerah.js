export default function() {
  return [
    {
      title: "Home",
      to: "/home",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Buat Pengajuan Registrasi",
      to: "/addMember",
      htmlBefore: '<i class="material-icons">add</i>',
      htmlAfter: ""
    },
    {
      title: "List Pengajuan Registrasi",
      to: "/verifRegistrasi",
      htmlBefore: '<i class="material-icons">note_add</i>',
      htmlAfter: ""
    },
    {
      title: "List Pengajuan Update",
      to: "/verifUpdate",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "List Pengajuan Penonaktifan",
      to: "/verifPenonaktifan",
      htmlBefore: '<i class="material-icons">highlight_off</i>',
      htmlAfter: ""
    },
    {
      title: "All Member",
      to: "/allMembers",
      htmlBefore: '<i class="material-icons">wysiwyg</i>',
      htmlAfter: ""
    }
  ];
}
