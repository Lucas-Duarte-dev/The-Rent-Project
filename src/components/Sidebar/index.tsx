import {
  SidebarContainer,
  SideContent,
  DashboradIcon,
  HomeIcon,
  StarIcon,
  UserIcon,
  Create,
  PlusIcon,
} from "./style";

export default function Sidebar() {
  function changeClass(pathname: string) {
    return window.location.pathname === pathname ? "active" : "";
  }

  return (
    <SidebarContainer>
      <img src="/icons/logo.svg" alt="logomarca" />
      <div className="space">
        <SideContent className={changeClass("/dashboard")}>
          <DashboradIcon />
          <span>Dashboard</span>
        </SideContent>
        <SideContent>
          <HomeIcon />
          <span>Meus anúncios</span>
        </SideContent>

        <SideContent>
          <StarIcon />
          <span>Meus favoritos</span>
        </SideContent>

        <SideContent>
          <UserIcon />
          <span>Meu perfil</span>
        </SideContent>

        <Create>
          <PlusIcon /> Criar um novo anúncio
        </Create>
      </div>
    </SidebarContainer>
  );
}
