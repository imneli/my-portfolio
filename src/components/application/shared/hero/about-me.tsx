import ModuleSectionWrapper from "../components/section-layout";
import { Code2, Rocket, Users } from "lucide-react";

const AboutMe = () => {
  return (
    <ModuleSectionWrapper className="relative">
      {/* Decorative geometric shapes
      <div className="absolute -right-4 top-8 w-16 h-16 border-4 border-yellow-400 rotate-12 opacity-30 pointer-events-none hidden md:block" />
      <div className="absolute -left-6 bottom-12 w-12 h-12 bg-cyan-400/20 border-3 border-cyan-400 -rotate-6 opacity-40 pointer-events-none hidden md:block" /> */}

      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="hidden sm:block shrink-0 mt-1">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 translate-x-1 translate-y-1" />
                <div className="relative bg-[#FAFF00] border-2 border-black p-2">
                  <Code2 className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 font-tech">
              Olá! Me chamo <span className="font-bold bg-yellow-400 text-black px-2 py-0.5 inline-block -rotate-1">Matheus</span>, tenho 19 anos e curso Engenharia
              de Software na FIAP. Comecei na área como
              <span className="font-bold text-yellow-400"> desenvolvedor freelancer</span>, criando landing pages e
              realizando diversos serviços de programação, foi assim que ganhei minhas
              primeiras experiências práticas e a confiança para evoluir na carreira.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="hidden sm:block shrink-0 mt-1">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-600 translate-x-1 translate-y-1" />
                <div className="relative bg-[#00F0FF] border-2 border-black p-2">
                  <Rocket className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 font-tech">
              Já atuei como <span className="font-bold text-cyan-400">desenvolvedor júnior</span>, onde participei da
              construção e crescimento de um e-commerce desde o zero, ajudando a
              plataforma a alcançar mais de <span className="font-bold bg-[#00F0FF] text-black px-2 py-0.5 inline-block rotate-1">10.000 usuários</span>. Essa
              vivência me deu uma visão mais ampla sobre produto, negócios e
              desenvolvimento focado no usuário.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="hidden sm:block shrink-0 mt-1">
              <div className="relative">
                <div className="absolute inset-0 bg-green-600 translate-x-1 translate-y-1" />
                <div className="relative bg-[#00FF88] border-2 border-black p-2">
                  <Rocket className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 font-tech">
              Atualmente, continuo atuando como desenvolvedor júnior para uma
              empresa de agronegócio, onde desenvolvo um sistema de gestão e
              mapeamento de <span className="font-bold bg-[#00FF88] text-black px-2 py-0.5 inline-block -rotate-1">pátios de compostagem</span>. Essa experiência tem me permitido
              aplicar tecnologia em setores essenciais e explorar soluções que impactam
              diretamente a eficiência e sustentabilidade do agronegócio.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="hidden sm:block shrink-0 mt-1">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 translate-x-1 translate-y-1" />
                <div className="relative bg-[#B794F6] border-2 border-black p-2">
                  <Users className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 font-tech">
              Hoje continuo ampliando minhas habilidades técnicas e profissionais,
              fortalecendo minha bagagem em áreas como desenvolvimento web, mobile,
              computação em nuvem e boas práticas de engenharia de software. Também
              trago comigo experiências de <span className="font-bold text-purple-400">liderança</span>,
              <span className="font-bold text-purple-400"> administração</span> e <span className="font-bold text-purple-400">moderação</span>, que
              contribuíram muito para meu crescimento pessoal e profissional.
            </p>
          </div>
        </div>
      </div>
    </ModuleSectionWrapper>
  );
};

export default AboutMe;
