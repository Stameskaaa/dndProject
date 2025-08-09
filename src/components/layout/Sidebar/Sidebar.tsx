// import { Box, Highlight, Input, Stack, useFilter } from '@chakra-ui/react';
// import { TreeView, createTreeCollection } from '@chakra-ui/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//   Swords,
//   Info,
//   GraduationCap,
//   PawPrint,
//   TreePine,
//   ListChecks,
//   Sparkles,
//   MountainSnow,
//   ScrollText,
//   LibraryBig,
//   BookMarked,
//   FileText,
//   PenLine,
//   LucideFile,
//   Earth,
//   ClipboardList,
//   LucideArrowDown,
// } from 'lucide-react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const routeIcons = {
//   start: <Swords className="text-amber-600" />,
//   about: <Info className="text-blue-500" />,
//   worlds: <Earth />,
//   // Персонаж
//   character: <ClipboardList />,
//   classes: <GraduationCap className="text-purple-500" />,
//   races: <PawPrint className="text-green-500" />,
//   origin: <TreePine className="text-emerald-500" />,
//   trait: <ListChecks className="text-yellow-500" />,
//   spells: <Sparkles className="text-pink-400" />,

//   // Миры
//   'gurvan-gol-valley': <MountainSnow className="text-stone-500" />,
//   history: <ScrollText className="text-amber-800" />,
//   bestiary: <LucideFile className="text-red-500" />,
//   library: <LibraryBig className="text-blue-400" />,

//   rules: <ScrollText />,
//   // Правила
//   glossary: <BookMarked className="text-teal-500" />,
//   'rules-dnd-2024': <FileText className="text-gray-600" />,
//   'home-rules': <PenLine className="text-orange-500" />,
// };

// export const Sidebar = () => {
//   return (
//     <Box
//       colorScheme="dark"
//       borderRadius="md"
//       width={64}
//       padding={3}
//       // bg="rgba(255, 255, 255, 0.1)"
//       // backdropFilter="auto"
//       // blur={'10px'}
//       // backdropBlur="20px"
//       bg="rgba(0, 0, 0, 0.1)"
//       backdropFilter="auto"
//       backdropBlur="5px">
//       {/* <Demo /> */}

//       <div
//         style={{
//           width: 250,
//           height: 400,
//           backgroundColor: 'rgba(255, 255, 255, 0.2)',
//           backdropFilter: 'blur(1.8px)',
//           borderRadius: 10,
//           padding: 10,
//           color: 'white',
//         }}>
//         <Demo />
//       </div>
//     </Box>
//   );
// };

// const Demo = () => {
//   const [collection, setCollection] = useState(initialCollection);
//   const [expanded, setExpanded] = useState<string[]>([]);
//   const [query, setQuery] = useState('');

//   const { contains } = useFilter({ sensitivity: 'base' });

//   const search = (search: string) => {
//     setQuery(search);
//     const nextCollection = initialCollection.filter((node) => contains(node.name, search));

//     // update collection
//     setCollection(nextCollection);

//     // expand all branches
//     setExpanded(nextCollection.getBranchValues());
//   };

//   return (
//     <Stack gap="3">
//       <Input
//         _placeholder={{ color: 'white' }}
//         size="sm"
//         placeholder="Поиск..."
//         onChange={(e) => search(e.target.value)}
//       />

//       <TreeView.Root
//         unmountOnExit={true}
//         animateContent={true}
//         collection={collection}
//         expandedValue={expanded}
//         onExpandedChange={(details) => setExpanded(details.expandedValue)}>
//         {/* <TreeView.Label srOnly>Title</TreeView.Label> */}
//         <TreeView.Tree>
//           <TreeView.Node
//             indentGuide={<TreeView.BranchIndentGuide />}
//             render={({ node, nodeState }) =>
//               nodeState.isBranch ? (
//                 <TreeView.BranchControl>
//                   {routeIcons[nodeState.value]}
//                   <TreeView.BranchText>
//                     <Highlight query={[query]} styles={{ bg: 'gray.emphasized' }}>
//                       {node.name}
//                     </Highlight>
//                   </TreeView.BranchText>
//                   <LucideArrowDown />
//                 </TreeView.BranchControl>
//               ) : (
//                 <TreeView.Item
//                   transition="background-color 0.2s ease-in-out, color 0.3s ease-in-out"
//                   as={(props) => <Link {...props} to={createRouteByArray(nodeState.valuePath)} />}
//                   onMouseDown={(e) => {
//                     e.preventDefault();
//                   }}>
//                   {routeIcons[nodeState.value]}
//                   <TreeView.ItemText>
//                     <Highlight query={[query]} styles={{ bg: 'gray.emphasized' }}>
//                       {node.name}
//                     </Highlight>
//                   </TreeView.ItemText>
//                 </TreeView.Item>
//               )
//             }
//           />
//         </TreeView.Tree>
//       </TreeView.Root>
//     </Stack>
//   );
// };

// interface Node {
//   id: string;
//   name: string;
//   children?: Node[];
// }

// const initialCollection = createTreeCollection<Node>({
//   nodeToValue: (node) => node.id,
//   nodeToString: (node) => node.name,
//   rootNode: {
//     id: 'ROOT',
//     name: '',
//     children: [
//       { id: 'start', name: 'Начать игру' },
//       {
//         id: 'character',
//         name: 'Персонаж',
//         children: [
//           {
//             id: 'classes',
//             name: 'Классы',
//           },
//           { id: 'races', name: 'Рассы/Виды' },
//           { id: 'origin', name: 'Происхождение' },
//           { id: 'trait', name: 'Черты' },
//           { id: 'spells', name: 'Заклинания' },
//         ],
//       },
//       {
//         id: 'worlds',
//         name: 'Миры',
//         children: [
//           {
//             id: 'gurvan-gol-valley',
//             name: 'Долина Гурван-Гол',
//             children: [
//               { id: 'history', name: 'История' },
//               { id: 'bestiary', name: 'Бестиарий' },
//               { id: 'library', name: 'Библиотека' },
//             ],
//           },
//         ],
//       },
//       {
//         id: 'rules',
//         name: 'Правила игры',
//         children: [
//           { id: 'glossary', name: 'Глоссарий' },
//           { id: 'rules-dnd-2024', name: 'Правила D&D 2024' },
//           { id: 'home-rules', name: 'Домашние правила' },
//         ],
//       },
//       { id: 'about', name: 'О нас' },
//     ],
//   },
// });

// function createRouteByArray(paths: string[] = []) {
//   if (paths.length === 0) return '';
//   return paths.reduce((result, route) => result + '/' + route, '');
// }
